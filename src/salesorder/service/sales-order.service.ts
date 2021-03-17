import { PaginateOptionsDTO } from '@common/dto/paginate-options.dto';
import { PaginationResultInterface } from '@common/interface/pagination-result.interface';
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
  async findPaginated(paginateOptions?: PaginateOptionsDTO): Promise<PaginationResultInterface> {

    if (paginateOptions.limit == null) { paginateOptions.limit = 10 }  // so funktionieren Standardwerte
    let skip = paginateOptions.limit * (paginateOptions.page - 1)

    let totalDocs: number = await this.salesOrderRepository.count({ jobDone: 0, orderCompleted: 0 });

    let docs = await this.salesOrderRepository.find({
      select: ['_id', 'customerShortName', 'name', 'costcenter'],
      where: [{ jobDone: 0, orderCompleted: 0 }],
      skip: skip,
      take: paginateOptions.limit
    })

    let totalpages: number
    if (paginateOptions.limit > 0) {
      totalpages = Math.round(totalDocs / paginateOptions.limit)
    }
    else {
      totalpages = 1
    }

    let hasPrevPage: boolean = false
    let prevPage: number = null
    if (paginateOptions.page > 1) {
      hasPrevPage = true
      prevPage = paginateOptions.page*1 - 1
    }

    let hasNextPage: boolean = false
    let nextPage: number = null
    if (paginateOptions.page < totalpages) {
      hasNextPage = true
      nextPage = paginateOptions.page*1 + 1
    }

    let page: number = paginateOptions.page*1
    console.log(page)
    let limit: number = paginateOptions.limit*1


    let result: PaginationResultInterface = {
      docs: docs,
      totalDocs: totalDocs,
      limit: limit,
      totalPages: totalpages,
      page: page,
      pagingCounter: 0,   //????
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage,
      prevPage: prevPage,
      nextPage: nextPage
    }

    return result

    // const pages = await this.salesOrderRepository.find({
    //   select: ['_id', 'customerShortName', 'name', 'costcenter'],
    //   where: [{ jobDone: 0, orderCompleted: 0 }],
    //   skip: skip,
    //   take: paginateOptions.limit
    // })
    // return pages;
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