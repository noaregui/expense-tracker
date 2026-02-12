import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { CreateExpenseDto } from '../../expenses/dto/create-expense.dto';
import { ExpensesRepository } from 'src/infrastructure/expenses.repository';

@Injectable()
export class CreateExpenseUseCase {
  constructor(private readonly expensesRepository: ExpensesRepository) {}

  execute(createExpenseDto: CreateExpenseDto): Expense {
    return this.expensesRepository.create(createExpenseDto);
  }
}
