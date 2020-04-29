import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { app } from 'protos/types';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private mathService: MathService) {}

  // @GrpcMethod('AppController', 'Accumulate')
  @GrpcMethod()
  public accumulate({ data }: app.INumberArray): app.ISumOfNumberArray {
    this.logger.debug(`Adding ${data.toString()}`);
    const sum = this.mathService.accumulate(data);

    return { sum };
  }
}
