import { useState, useEffect } from "react";
import { getExpenses } from "./api/expenses";
import type { Expense } from "./api/types";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExpenses()
      .then((data) => setExpenses(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
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
