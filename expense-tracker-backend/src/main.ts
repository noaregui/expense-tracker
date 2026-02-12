import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Activar validaciones globales usando los DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Elimina campos no definidos en DTO
      forbidNonWhitelisted: true, // Lanza error si llega un campo extra
      transform: true, // Convierte automáticamente tipos
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}

// Manejo de posibles errores al iniciar el servidor
bootstrap().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1); // Salida con error
});
