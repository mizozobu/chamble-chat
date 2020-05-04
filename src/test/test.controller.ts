import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';
import { ServerReadableStream, ServerDuplexStream } from 'grpc';
import { test } from '@protos/types';
import { TestService } from './test.service';

// see https://github.com/nestjs/nest/blob/master/integration/microservices/src/grpc-advanced/advanced.grpc.controller.ts
@Controller('test')
export class TestController {
  private logger = new Logger(TestController.name);

  constructor(private testService: TestService) {}

  /*
   * unary
   */
  @GrpcMethod()
  public unaryAccumulate(req: test.IReqAccumulate): test.IResAccumulate {
    const { data } = req;
    const sum = this.testService.accumulate(data);
    this.logger.debug(`unaryAccumulate ${JSON.stringify(req)} => ${sum}`);

    return { sum };
  }

  /*
   * client stream
   */
  @GrpcStreamCall()
  clientStreamAccumulate(
    stream: ServerReadableStream<test.IReqAccumulate>,
    callback: (err: unknown, res: test.IResAccumulate) => void,
  ): void {
    let sum = 0;

    stream.on('data', (req: test.IReqAccumulate) => {
      const { data } = req;
      sum += this.testService.accumulate(data);
      this.logger.debug(`clientStreamAccumulate req ${JSON.stringify(req)}`);
    });

    stream.on('end', () => {
      const res: test.IResAccumulate = { sum };
      callback(null, res);
      this.logger.debug(`clientStreamAccumulate res ${JSON.stringify(res)}`);
    });
  }

  /*
   * duplex stream in stream pattern
   */
  @GrpcStreamCall()
  duplexStreamAccumulate(
    stream: ServerDuplexStream<test.IReqAccumulate, test.IResAccumulate>,
  ): void {
    stream.on('data', (req: test.IReqAccumulate) => {
      const { data } = req;
      const res: test.IResAccumulate = { sum: this.testService.accumulate(data) };
      stream.write(res);
      this.logger.debug(`duplexStreamAccumulate ${JSON.stringify(req)} => ${JSON.stringify(res)}`);
    });

    stream.on('end', () => this.logger.debug('duplexStreamAccumulate ended'));
  }

  /*
   * client stream in observable pattern
   */
  @GrpcStreamMethod()
  public clientStreamObservableAccumulate(
    observable$: Observable<test.IReqAccumulate>,
  ): Observable<test.IReqAccumulate> {
    const subject = new Subject();
    let sum = 0;

    const onNext = (req: test.IReqAccumulate): void => {
      const { data } = req;
      sum += this.testService.accumulate(data);
      this.logger.debug(`clientStreamObservableAccumulate req ${JSON.stringify(req)}}`);
    };
    const onError = (err: Error): void => {
      subject.unsubscribe();
      this.logger.error(err);
    };
    const onComplete = (): void => {
      const res: test.IResAccumulate = { sum };
      subject.next(res);
      subject.complete();
      this.logger.debug(`clientStreamObservableAccumulate res ${JSON.stringify(res)}}`);
    };
    observable$.subscribe(onNext, onError, onComplete);

    return subject.asObservable();
  }

  /*
   * server stream
   */
  @GrpcMethod()
  serverStreamObservableAccumulate(req: test.IReqAccumulate): Observable<test.IResAccumulate> {
    const subject = new Subject<test.IResAccumulate>();
    const { data } = req;

    this.logger.debug(`serverStreamObservableAccumulate req ${JSON.stringify(req)}`);

    const onNext = (res: test.IResAccumulate): void => {
      this.logger.debug(`serverStreamObservableAccumulate res ${JSON.stringify(res)}`);
    };
    const onError = (err: Error): void => {
      subject.unsubscribe();
      this.logger.error(err);
    };
    const onComplete = (): void => {
      this.logger.debug('serverStreamObservableAccumulate ended');
    };
    subject.subscribe(onNext, onError, onComplete);

    let counter = 0;
    setInterval(() => {
      counter += 1;
      const sum = this.testService.accumulate(data) * counter;

      if (sum > 1000) {
        subject.complete();
      } else {
        const res: test.IResAccumulate = { sum };
        subject.next(res);
      }
    }, 1000);

    return subject.asObservable();
  }

  /*
   * duplex stream in observable pattern
   */
  @GrpcStreamMethod()
  public duplexStreamObservableAccumulate(
    observable$: Observable<test.IReqAccumulate>,
  ): Observable<test.IReqAccumulate> {
    const subject = new Subject();

    const onNext = (req: test.IReqAccumulate): void => {
      const { data } = req;
      const res: test.IResAccumulate = { sum: this.testService.accumulate(data) };

      subject.next(res);
      this.logger.debug(
        `duplexStreamObservableAccumulate ${JSON.stringify(req)} => ${JSON.stringify(res)}`,
      );
    };
    const onError = (err: Error): void => {
      subject.unsubscribe();
      this.logger.error(err);
    };
    const onComplete = (): void => {
      subject.complete();
      this.logger.debug('duplexStreamObservableAccumulate ended');
    };
    observable$.subscribe(onNext, onError, onComplete);

    return subject.asObservable();
  }
}
