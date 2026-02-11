import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { CreateExpenseUseCase } from 'src/application/expenses/create-expense.use-case';
import { ListExpensesUseCase } from 'src/application/expenses/list-expenses.use-case';
import { UpdateExpenseUseCase } from 'src/application/expenses/update-expense.use-case';
import { ExpensesRepository } from 'src/infraestructure/expenses.repository';
@Module({
  controllers: [ExpensesController],
  providers: [
    ExpensesRepository,
    CreateExpenseUseCase,
    ListExpensesUseCase,
    UpdateExpenseUseCase,
  ],
})
export class ExpensesModule {}
