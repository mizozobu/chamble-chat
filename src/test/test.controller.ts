import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { test } from 'protos/types';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  private logger = new Logger(TestController.name);

  constructor(private testService: TestService) {}

  // @GrpcMethod('TestController', 'Accumulate')
  @GrpcMethod()
  public accumulate({ data }: test.INumberArray): test.ISumOfNumberArray {
    this.logger.debug(`accumulate: Adding ${data.toString()}`);
    const sum = this.testService.accumulate(data);

    return { sum };
  }

  @GrpcStreamMethod()
  async accumulateStream(messages: Observable<test.INumberArray>): Promise<test.ISumOfNumberArray> {
    return new Promise<test.ISumOfNumberArray>((resolve, reject) => {
      messages.subscribe(
        ({ data }: test.INumberArray) => {
          this.logger.debug(`accumulateStream: Adding ${data.toString()}`);
          resolve({
            sum: this.testService.accumulate(data),
          });
        },
        err => {
          reject(err);
        },
      );
    });
  }

  @GrpcStreamCall()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async accumulateStreamPass(stream: any): Promise<void> {
    stream.on('data', ({ data }: test.INumberArray) => {
      this.logger.debug(`accumulateStreamPass: Adding ${data.toString()}`);
      stream.write({ sum: this.testService.accumulate(data) });
    });
  }
}
