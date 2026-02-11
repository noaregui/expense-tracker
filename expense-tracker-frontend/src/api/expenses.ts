import axios from "axios";
import type { Expense } from "./types";

const BASE_URL = "http://localhost:3000/expenses";

export const getExpenses = async (): Promise<Expense[]> => {
  const response = await axios.get<Expense[]>(BASE_URL);
  return response.data;
};

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const createExpense = async (
  expense: Omit<Expense, "id">,
): Promise<Expense> => {
  await simulateDelay(500);
  const response = await axios.post<Expense>(BASE_URL, expense);
  return response.data;
};

export const updateExpense = async (
  id: string,
  expense: Partial<Omit<Expense, "id">>,
): Promise<Expense> => {
  await simulateDelay(500);
  const response = await axios.patch<Expense>(`${BASE_URL}/${id}`, expense);
  return response.data;
};
