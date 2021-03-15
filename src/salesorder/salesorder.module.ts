import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesorderController } from './salesorder.controller';
import { SalesOrderService } from './salesorder.service';
import { Salesorder } from './salesorder.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Salesorder])],
  controllers: [SalesorderController],
  providers: [SalesOrderService]
})
export class SalesorderModule {}
