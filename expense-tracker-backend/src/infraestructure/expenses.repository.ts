import { Injectable, NotFoundException } from '@nestjs/common';
import { Expense } from '../domain/entities/expense.entity';
import { CreateExpenseDto } from 'src/expenses/dto/create-expense.dto';
import { UpdateExpenseDto } from 'src/expenses/dto/update-expense.dto';

@Injectable()
export class ExpensesRepository {
  // Array en memoria para almacenar los gastos
  private expenses: Expense[] = [];
  private nextId = 1;

  // Devuelve todos los gastos
  findAll(): Expense[] {
    return this.expenses;
  }

  // Crea un nuevo gasto y lo añade al array
  create(createExpenseDto: CreateExpenseDto): Expense {
    const expense: Expense = {
      id: this.nextId.toString(),
      ...createExpenseDto,
    };

    this.expenses.push(expense);
    this.nextId++;
    return expense;
  }

  // Actualiza un gasto existente
  update(id: string, updateExpenseDto: UpdateExpenseDto): Expense {
    const expense = this.expenses.find((exp) => exp.id === id);

    if (!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }

    // Actualiza solo los campos que vienen en el DTO
    Object.assign(expense, updateExpenseDto);
    return expense;
  }
}
