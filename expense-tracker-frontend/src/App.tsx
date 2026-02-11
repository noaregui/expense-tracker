import React, { useState, useEffect } from "react";
import { getExpenses, createExpense, updateExpense } from "./api/expenses";
import type { Expense } from "./api/types";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  // Estados para el formulario
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Loading al guardar
  const [formLoading, setFormLoading] = useState(false);
  // Errores en pantalla
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getExpenses()
      .then((data) => setExpenses(data))
      .catch(() => setError("Error al cargar los gastos"))
      .finally(() => setLoading(false));
  }, []);

  // Función para enviar el formulario
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    setError(null);

    // Validación básica antes de enviar
    if (title.length < 3) {
      setError("El título debe tener al menos 3 caracteres");
      setFormLoading(false);
      return;
    }
    if (Number(amount) <= 0) {
      setError("La cantidad debe ser positiva");
      setFormLoading(false);
      return;
    }

    const expenseData = {
      title,
      amount: Number(amount),
      date,
      category: category || undefined,
    };

    try {
      if (editingId) {
        // Editar gasto existente
        const updated = await updateExpense(editingId, expenseData);
        setExpenses(
          expenses.map((exp) => (exp.id === editingId ? updated : exp)),
        );
        setEditingId(null); // dejar de editar
      } else {
        // Crear nuevo gasto
        const created = await createExpense(expenseData);
        setExpenses([...expenses, created]);
      }

      // Limpiar formulario
      setTitle("");
      setAmount("");
      setDate("");
      setCategory("");
    } catch (err) {
      console.error("Error saving expense:", err);
      alert("Error al guardar el gasto");
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (expense: Expense) => {
    setEditingId(expense.id);
    setTitle(expense.title);
    setAmount(expense.amount.toString());
    setDate(expense.date);
    setCategory(expense.category || "");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Formulario para crear gasto */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={formLoading}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          disabled={formLoading}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          disabled={formLoading}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={formLoading}
        />
        <button type="submit" disabled={formLoading}>
          {formLoading
            ? editingId
              ? "Updating..."
              : "Saving..."
            : editingId
              ? "Update Expense"
              : "Add Expense"}
        </button>
      </form>

      {/* Listado de gastos */}
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.title} - {exp.amount} - {exp.date} -{" "}
            {exp.category || "No category"}
            <button
              onClick={() => handleEdit(exp)}
              style={{ marginLeft: "10px" }}
              disabled={formLoading}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
