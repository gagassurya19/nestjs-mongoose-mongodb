import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Untuk memvalidasi salah benar nya data dari DTO
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.APP_PORT || 3002);
}
bootstrap();
