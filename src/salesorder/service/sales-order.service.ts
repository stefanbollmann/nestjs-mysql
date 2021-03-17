import { PaginateOptionsDTO } from '@common/dto/paginate-options.dto';
import { PaginationResultDTO } from '@common/dto/pagination-result.dto';
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

  // findActiveSalesOrders(skip: number, limit: number): Promise<SalesOrder[]> {
  //   return this.salesOrderRepository.find({
  //     select: ['_id', 'customerShortName', 'name', 'costcenter'],
  //     where: [{ jobDone: 0, orderCompleted: 0 }],
  //     skip: skip,
  //     take: limit
  //   })
  // }

  async findById(id:number): Promise<SalesOrder>{
    let doc = await this.salesOrderRepository.findOne({
      select: ['_id', 'customerShortName', 'name', 'costcenter'],
      where: [{ _id: id, jobDone: 0, orderCompleted: 0 }],
    })
    return doc
  }

  async findPaginated(paginateOptions?: PaginateOptionsDTO): Promise<PaginationResultDTO<SalesOrder>> {

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
      totalpages = Math.ceil(totalDocs / paginateOptions.limit)
    }
    else {
      totalpages = 1
    }

    let hasPrevPage: boolean = false
    let prevPage: number = null
    if (paginateOptions.page > 1) {
      hasPrevPage = true
      prevPage = paginateOptions.page * 1 - 1
    }

    let hasNextPage: boolean = false
    let nextPage: number = null
    if (paginateOptions.page < totalpages) {
      hasNextPage = true
      nextPage = paginateOptions.page * 1 + 1
    }

    let page: number = paginateOptions.page * 1
    console.log(page)
    let limit: number = paginateOptions.limit * 1


    let result: PaginationResultDTO<SalesOrder> = {
      docs: docs,
      totalDocs: totalDocs,
      limit: limit,
      totalPages: totalpages,
      page: page,
      pagingCounter: 1,   // here always 1, we start countig the first page as 1
      hasPrevPage: hasPrevPage,
      hasNextPage: hasNextPage,
      prevPage: prevPage,
      nextPage: nextPage
    }

    return result

  }

}