import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

const logger = new Logger('Main');

// strict type checking
const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

!async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log(`Microservice is listening on ${process.env.APP_PORT}`);
  });
}()
