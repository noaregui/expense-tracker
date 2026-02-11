import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { ExpensesService } from 'src/expenses/expenses.service';

@Injectable()
export class ListExpensesUseCase {
  constructor(private readonly expensesService: ExpensesService) {}

  execute(): Expense[] {
    return this.expensesService.findAll();
  }
}
