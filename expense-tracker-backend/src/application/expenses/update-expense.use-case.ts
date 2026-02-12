import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { UpdateExpenseDto } from '../../expenses/dto/update-expense.dto';
import { ExpensesRepository } from 'src/infrastructure/expenses.repository';

@Injectable()
export class UpdateExpenseUseCase {
  constructor(private readonly expensesRepository: ExpensesRepository) {}

  execute(id: string, updateExpenseDto: UpdateExpenseDto): Expense {
    return this.expensesRepository.update(id, updateExpenseDto);
  }
}
