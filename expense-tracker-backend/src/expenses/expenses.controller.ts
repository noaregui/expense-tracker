import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { CreateExpenseUseCase } from '../application/expenses/create-expense.use-case';
import { ListExpensesUseCase } from '../application/expenses/list-expenses.use-case';
import { UpdateExpenseUseCase } from '../application/expenses/update-expense.use-case';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from 'src/domain/entities/expense.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(
    private readonly createExpenseUseCase: CreateExpenseUseCase,
    private readonly listExpensesUseCase: ListExpensesUseCase,
    private readonly updateExpenseUseCase: UpdateExpenseUseCase,
  ) {}

  @Get()
  findAll(): Expense[] {
    return this.listExpensesUseCase.execute();
  }

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto): Expense {
    return this.createExpenseUseCase.execute(createExpenseDto);
  }

  @Patch(':id')
  updatePartial(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ): Expense {
    return this.updateExpenseUseCase.execute(id, updateExpenseDto);
  }
}
