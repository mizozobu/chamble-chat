import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger('Main');

// strict type checking
const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
    package: ['test'],
    protoPath: [join(__dirname, '../protos/test.proto')],
  },
};

(async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log(`Microservice is listening on ${process.env.APP_PORT}`);
  });
})();
