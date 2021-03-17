import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrder } from 'src/model/sales-order/sales-order.model';
import { ActiveSalesOrderController } from './controller/active-sales-order.controller';
import { SalesOrderService } from './service/sales-order.service';


@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder])],
  controllers: [ActiveSalesOrderController],
  providers: [SalesOrderService]
})
export class SalesOrderModule {}
