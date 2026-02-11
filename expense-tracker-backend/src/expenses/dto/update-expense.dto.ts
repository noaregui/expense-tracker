import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  MinLength,
  Min,
} from 'class-validator';

export class UpdateExpenseDto {
  @IsOptional()
  @IsString()
  @MinLength(1, { message: 'El título no puede estar vacío' })
  title?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.01, { message: 'La cantidad debe ser positiva' })
  amount?: number;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
