import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesorder } from '../salesorder.entity';

@Injectable()
export class SalesOrderService {
  constructor(
    @InjectRepository(Salesorder)
    private salesOrderRepository: Repository<Salesorder>,
  ) { }

  findActiveSalesOrders(): Promise<Salesorder[]> {
    return this.salesOrderRepository.find({
      select: ['_id', 'customerShortName', 'name', 'costcenter'],
      where: [{ jobDone: 0, orderCompleted: 0 }],
    })

  }
}