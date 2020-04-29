import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { GrpcMethod } from '@nestjs/microservices';

import { app } from 'protos/types'

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(
    private mathService: MathService,
  ) {}

  // @GrpcMethod('AppController', 'Accumulate')
  @GrpcMethod()
  public accumulate({ data }: app.INumberArray): app.ISumOfNumberArray {
    this.logger.debug(`Adding ${data.toString()}`);
    const sum = this.mathService.accumulate(data);

    return { sum };
  }
}
