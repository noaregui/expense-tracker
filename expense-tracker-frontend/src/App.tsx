import React, { useState, useEffect } from "react";
import { getExpenses, createExpense } from "./api/expenses";
import type { Expense } from "./api/types";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  // Estados para el formulario
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    getExpenses()
      .then((data) => setExpenses(data))
      .finally(() => setLoading(false));
  }, []);

  // Función para enviar el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newExpense = {
      title,
      amount: Number(amount),
      date,
      category: category || undefined,
    };

    try {
      const created = await createExpense(newExpense);
      setExpenses([...expenses, created]); // actualizar lista
      setTitle(""); // limpiar formulario
      setAmount("");
      setDate("");
      setCategory("");
    } catch (error) {
      console.error("Error creating expense:", error);
      alert("Error creating expense");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* Formulario para crear gasto */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value)
          }
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategory(e.target.value)
          }
        />
        <button type="submit">Add Expense</button>
      </form>

      {/* Listado de gastos */}
      <ul>
        {expenses.map((exp: Expense) => (
          <li key={exp.id}>
            {exp.title} - {exp.amount} - {exp.date} -{" "}
            {exp.category || "No category"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
