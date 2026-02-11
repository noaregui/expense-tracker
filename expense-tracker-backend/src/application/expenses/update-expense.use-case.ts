import { Injectable, NotFoundException } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { UpdateExpenseDto } from '../../expenses/dto/update-expense.dto';

@Injectable()
export class UpdateExpenseUseCase {
  constructor(private readonly expenses: Expense[]) {}

  execute(id: string, updateExpenseDto: UpdateExpenseDto): Expense {
    const expense = this.expenses.find((exp) => exp.id === id);

    if (!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }

    Object.assign(expense, updateExpenseDto);
    return expense;
  }
}
