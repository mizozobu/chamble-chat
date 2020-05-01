import { Test, TestingModule } from '@nestjs/testing';
import { TestService } from './test.service';

describe('TestService', () => {
  let testService: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService],
    }).compile();

    testService = module.get<TestService>(TestService);
  });

  it('should be defined', () => {
    expect(testService).toBeDefined();
  });

  it('accumulate"', () => {
    expect(testService.accumulate([1, 2, 3, 4, 5])).toBe(15);
  });
});
