import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { UpdateExpenseDto } from '../../expenses/dto/update-expense.dto';
import { ExpensesService } from 'src/expenses/expenses.service';

@Injectable()
export class UpdateExpenseUseCase {
  constructor(private readonly expensesService: ExpensesService) {}

  execute(id: string, updateExpenseDto: UpdateExpenseDto): Expense {
    return this.expensesService.update(id, updateExpenseDto);
  }
}
