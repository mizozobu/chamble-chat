import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { appModuleMetadata } from './app.module';

describe('AppController', () => {
  let nestApp: TestingModule;
  let appController: AppController;

  beforeAll(async () => {
    nestApp = await Test.createTestingModule(appModuleMetadata).compile();

    appController = nestApp.get<AppController>(AppController);
  });

  afterAll(async () => {
    await nestApp.close();
  });

  it('accumulate"', () => {
    expect(appController.accumulate({ data: [1, 2, 3, 4, 5] })).toEqual({
      sum: 15,
    });
  });
});
