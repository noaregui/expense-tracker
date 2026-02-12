import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  MinLength,
  Min,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({ description: 'Título del gasto', example: 'Cuadernos' })
  @IsString()
  @MinLength(3, { message: 'El título no puede estar vacío' })
  title: string;

  @ApiProperty({ description: 'Monto del gasto en euros', example: 23.5 })
  @IsNumber()
  @Min(0.01, { message: 'La cantidad debe ser positiva' })
  amount: number;

  @ApiProperty({ description: 'Fecha del gasto', example: '2026-02-12' })
  @IsDateString()
  date: string;

  @ApiProperty({
    description: 'Categoría del gasto',
    example: 'Material escolar',
    required: false,
  })
  @IsOptional()
  @IsString()
  category?: string;
}
