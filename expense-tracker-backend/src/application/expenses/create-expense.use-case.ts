import { Injectable } from '@nestjs/common';
import { Expense } from '../../domain/entities/expense.entity';
import { CreateExpenseDto } from '../../expenses/dto/create-expense.dto';

@Injectable()
export class CreateExpenseUseCase {
  private expenses: Expense[] = [];
  private nextId = 1;

  execute(createExpenseDto: CreateExpenseDto): Expense {
    const expense: Expense = {
      id: this.nextId.toString(),
      ...createExpenseDto,
    };

    this.expenses.push(expense);
    this.nextId++;
    return expense;
  }

  getAll(): Expense[] {
    return this.expenses;
  }
}
