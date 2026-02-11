// Domain entity representing an expense
export class Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
  category?: string;
}
