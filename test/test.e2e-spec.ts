import * as ProtoLoader from '@grpc/proto-loader';
import * as GRPC from 'grpc';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { test } from '@protos/types';
import { TestController } from '@src/test/test.controller';
import { TestService } from '@src/test/test.service';

// see https://github.com/nestjs/nest/blob/master/integration/microservices/e2e/orders-grpc.spec.ts
describe('TestController (e2e)', () => {
  let app: INestApplication;
  let controller: TestController;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let client: any;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService],
    }).compile();

    app = module.createNestApplication();

    app.connectMicroservice({
      transport: Transport.GRPC,
      options: {
        package: ['test'],
        protoPath: [join(__dirname, '../protos/test.proto')],
      },
    });

    // Get controller instance
    controller = app.get<TestController>(TestController);

    // Start gRPC microservice
    await app.startAllMicroservicesAsync();
    await app.init();

    // Load proto-buffers for test gRPC dispatch
    const proto = ProtoLoader.loadSync(
      join(__dirname, '../protos/test.proto'),
    ) as ProtoLoader.PackageDefinition;

    // Create Raw gRPC client object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const protoGRPC = GRPC.loadPackageDefinition(proto) as any;

    // Create client connected to started services at standard 5000 port
    client = new protoGRPC.test.TestController('localhost:5000', GRPC.credentials.createInsecure());
  });

  it('unaryAccumulate"', () => {
    expect(controller.unaryAccumulate({ data: [1, 2, 3, 4, 5] })).toEqual({
      sum: 15,
    });
  });

  it('clientStreamAccumulate', async () => {
    const callHandler = client.ClientStreamAccumulate((err: Error, res: test.IResAccumulate) => {
      if (err) {
        throw err;
      }
      expect(res).toEqual({ sum: 15 });
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      callHandler.write({ data: [1, 2, 3, 4, 5] });
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  });

  it('duplexStreamAccumulate', async () => {
    const callHandler = client.DuplexStreamAccumulate();

    callHandler.on('data', (res: test.IResAccumulate): void => {
      expect(res).toEqual({ sum: 15 });
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

  it('clientStreamObservableAccumulate', async () => {
    const callHandler = client.ClientStreamObservableAccumulate(
      (err: Error, res: test.IResAccumulate) => {
        if (err) {
          throw err;
        }
        expect(res).toEqual({ sum: 15 });
      },
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      callHandler.write({ data: [1, 2, 3, 4, 5] });
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  });

  it('serverStreamObservableAccumulate', async () => {
    const callHandler = client.ServerStreamObservableAccumulate({ data: [1, 2, 3, 4, 5] });

    callHandler.on('data', (res: test.IResAccumulate): void => {
      expect(res).toEqual({ sum: 15 });
    });

    callHandler.on('error', (err: Error) => {
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
      // callHandler.write({ data: [1, 2, 3, 4, 5] });
      setTimeout(() => resolve(), 1000);
    });
  });

  it('duplexStreamObservableAccumulate', async () => {
    const callHandler = client.DuplexStreamObservableAccumulate();

    callHandler.on('data', (res: test.IResAccumulate): void => {
      expect(res).toEqual({ sum: 15 });
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

  afterAll(async () => {
    await app.close();
    client.close();
  });
});
