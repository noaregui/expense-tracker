import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { CreateExpenseUseCase } from 'src/application/expenses/create-expense.use-case';
import { ListExpensesUseCase } from 'src/application/expenses/list-expenses.use-case';
import { UpdateExpenseUseCase } from 'src/application/expenses/update-expense.use-case';
import { ExpensesService } from './expenses.service';
@Module({
  controllers: [ExpensesController],
  providers: [
    ExpensesService,
    CreateExpenseUseCase,
    ListExpensesUseCase,
    UpdateExpenseUseCase,
  ],
})
export class ExpensesModule {}
