import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { CreateExpenseDto } from '../../expenses/dto/create-expense.dto';
import { ExpensesService } from 'src/expenses/expenses.service';

@Injectable()
export class CreateExpenseUseCase {
  constructor(private readonly expensesService: ExpensesService) {}

  execute(createExpenseDto: CreateExpenseDto): Expense {
    return this.expensesService.create(createExpenseDto);
  }
}
