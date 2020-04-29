import * as ProtoLoader from '@grpc/proto-loader';
import * as GRPC from 'grpc';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { app } from 'protos/types';
import { AppController } from '../src/app.controller';
import { MathService } from '../src/math.service';

// https://github.com/nestjs/nest/blob/master/integration/microservices/e2e/sum-grpc.spec.ts
describe('AppController (e2e)', () => {
  let nestApp: INestApplication;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let client: any;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController],
      providers: [MathService],
    }).compile();

    nestApp = module.createNestApplication();

    nestApp.connectMicroservice({
      transport: Transport.GRPC,
      options: {
        package: ['app'],
        protoPath: [join(__dirname, '../protos/app.proto')],
      },
    });

    // Start gRPC microservice
    await nestApp.startAllMicroservicesAsync();
    await nestApp.init();

    // Load proto-buffers for test gRPC dispatch
    const proto = ProtoLoader.loadSync(
      join(__dirname, '../protos/app.proto'),
    ) as ProtoLoader.PackageDefinition;

    // Create Raw gRPC client object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const protoGRPC = GRPC.loadPackageDefinition(proto) as any;

    // Create client connected to started services at standard 5000 port
    client = new protoGRPC.app.AppController('localhost:5000', GRPC.credentials.createInsecure());
  });

  afterAll(async () => {
    await nestApp.close();
    client.close();
  });

  it('GRPC Sending and receiving Stream from RX handler', async () => {
    const callHandler = client.AccumulateStream();

    callHandler.on('data', (msg: app.ISumOfNumberArray): void => {
      expect(msg).toEqual({ sum: 15 });
      callHandler.cancel();
    });

    callHandler.on('error', (err: Error): void => {
      // We want to fail only on real errors while Cancellation error
      // is expected
      if (
        String(err)
          .toLowerCase()
          .indexOf('cancelled') === -1
      ) {
        fail(`gRPC Stream error happened, error: ${err}`);
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      callHandler.write({ data: [1, 2, 3, 4, 5] });
      setTimeout(() => resolve(), 1000);
    });
  });

  it('GRPC Sending and receiving Stream from Call Passthrough handler', async () => {
    const callHandler = client.AccumulateStreamPass();

    callHandler.on('data', (msg: app.ISumOfNumberArray): void => {
      expect(msg).toEqual({ sum: 15 });
      callHandler.cancel();
    });

    callHandler.on('error', (err: Error): void => {
      // We want to fail only on real errors while Cancellation error is expected
      if (
        String(err)
          .toLowerCase()
          .indexOf('cancelled') === -1
      ) {
        fail(`gRPC Stream error happened, error: ${err}`);
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      callHandler.write({ data: [1, 2, 3, 4, 5] });
      setTimeout(() => resolve(), 1000);
    });
  });
});
