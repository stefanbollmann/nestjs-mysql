import { Test, TestingModule } from '@nestjs/testing';
import { ActiveSalesOrderController } from './active-sales-order.controller';

describe('SalesorderController', () => {
  let controller: ActiveSalesOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiveSalesOrderController],
    }).compile();

    controller = module.get<ActiveSalesOrderController>(ActiveSalesOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
