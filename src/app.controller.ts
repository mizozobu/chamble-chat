import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod, GrpcStreamCall } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { app } from 'protos/types';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private mathService: MathService) {}

  // @GrpcMethod('AppController', 'Accumulate')
  @GrpcMethod()
  public accumulate({ data }: app.INumberArray): app.ISumOfNumberArray {
    this.logger.debug(`accumulate: Adding ${data.toString()}`);
    const sum = this.mathService.accumulate(data);

    return { sum };
  }

  @GrpcStreamMethod()
  async accumulateStream(messages: Observable<app.INumberArray>): Promise<app.ISumOfNumberArray> {
    return new Promise<app.ISumOfNumberArray>((resolve, reject) => {
      messages.subscribe(
        ({ data }: app.INumberArray) => {
          this.logger.debug(`accumulateStream: Adding ${data.toString()}`);
          resolve({
            sum: this.mathService.accumulate(data),
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
    stream.on('data', ({ data }: app.INumberArray) => {
      this.logger.debug(`accumulateStreamPass: Adding ${data.toString()}`);
      stream.write({ sum: this.mathService.accumulate(data) });
    });
  }
}
