import { PaginateOptionsDTO } from '@common/dto/paginate-options.dto';
import { SalesOrder } from '@model/sales-order/sales-order.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class SalesOrderService {
  constructor(
    @InjectRepository(SalesOrder)
    private salesOrderRepository: Repository<SalesOrder>,
  ) { }

  findActiveSalesOrders(skip: number, limit: number): Promise<SalesOrder[]> {
    return this.salesOrderRepository.find({
      select: ['_id', 'customerShortName', 'name', 'costcenter'],
      where: [{ jobDone: 0, orderCompleted: 0 }],
      skip: skip,
      take: limit
    })
  }

  //async ???
  async findPaginated(paginateOptions?: PaginateOptionsDTO): Promise<SalesOrder[]> {

    let skip = paginateOptions.limit * paginateOptions.page


    const results = await this.salesOrderRepository.find({
      select: ['_id', 'customerShortName', 'name', 'costcenter'],
      where: [{ jobDone: 0, orderCompleted: 0 }],
      skip: skip,
      take: paginateOptions.limit
    })
    return results;
  }



  // findActiveSalesOrders(): Promise<SalesOrder[]> {
  //   return this.salesOrderRepository.find({
  //     select: ['_id', 'customerShortName', 'name', 'costcenter'],
  //     where: [{ jobDone: 0, orderCompleted: 0 }],
  //     skip: 10,
  //     take: 10
  //   })
  // }

}