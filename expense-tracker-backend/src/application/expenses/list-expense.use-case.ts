import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';

@Injectable()
export class FindAllExpensesUseCase {
  constructor(private readonly expenses: Expense[]) {}

  execute(): Expense[] {
    return this.expenses;
  }
}
