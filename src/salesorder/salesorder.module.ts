import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesorderController } from './salesorder.controller';
import { SalesorderService } from './salesorder.service';
import { Salesorder } from './salesorder.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Salesorder])],
  controllers: [SalesorderController],
  providers: [SalesorderService]
})
export class SalesorderModule {}
