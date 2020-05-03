import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
    package: ['test', 'chat'],
    protoPath: [join(__dirname, '../protos/test.proto'), join(__dirname, '../protos/chat.proto')],
  },
};

(async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(() => {
    logger.log(`Microservice is listening on ${process.env.APP_PORT}`);
  });
})();
