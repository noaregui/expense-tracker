import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { ExpensesRepository } from 'src/infrastructure/expenses.repository';

@Injectable()
export class ListExpensesUseCase {
  constructor(private readonly expensesRepository: ExpensesRepository) {}

  execute(): Expense[] {
    return this.expensesRepository.findAll();
  }
}
