import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrderController } from './controller/salesorder.controller';
import { SalesOrderService } from './service/salesorder.service';
import { Salesorder } from './salesorder.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Salesorder])],
  controllers: [SalesOrderController],
  providers: [SalesOrderService]
})
export class SalesorderModule {}
