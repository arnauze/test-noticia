import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // Run with HTTPS
  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/private-key.pem'),
  //   cert: fs.readFileSync('./secrets/public-certificate.pem'),
  // };
  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  // });
  // await app.listen(3000);

  // Run without HTTPS
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
