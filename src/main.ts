import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Env variables
  const port = process.env.MAIL_PORT || 3003;

  // Configure CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Replace with the allowed origin(s) of your frontend app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (e.g., cookies) to be sent with requests
  };

  // Enable CORS for your application
  app.enableCors(corsOptions);

  await app.listen(port, () => {
    try {
      console.log('Mail service running on port' + port);
    } catch (error) {
      console.log(error.message);
    }
  });
}
bootstrap();
