export class CreateExpenseDto {
  title: string;
  amount: number;
  date: string;
  category?: string;
}
