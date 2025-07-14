import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // ✅ Your frontend origin
    credentials: true, // ✅ Only if using cookies or auth headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
