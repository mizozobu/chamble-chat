import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController', () => {
  let app: TestingModule;
  let testController: TestController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [],
      controllers: [TestController],
      providers: [TestService],
    }).compile();

    testController = app.get<TestController>(TestController);
  });

  it('accumulate"', () => {
    expect(testController.accumulate({ data: [1, 2, 3, 4, 5] })).toEqual({
      sum: 15,
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
