import { PaginateOptionsDTO } from '@common/dto/paginate-options.dto';
import { PaginationResultInterface } from '@common/interface/pagination-result.interface';
import { SalesOrder } from '@model/sales-order/sales-order.model';
import { Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { SalesOrderService } from '../service/sales-order.service'

@Controller('active-sales-orders')
export class ActiveSalesOrderController {

    constructor(private salesOrderService: SalesOrderService) { }

    // @Get()
    // getActiveSalesOrders(pagination: boolean, sort: string, page: number, limit: number) {
    //     let skip = page * limit
    //     return this.salesOrderService.findActiveSalesOrders(skip, limit);
    // }

    // @Get()
    // async getmany(@Query() paginateOptions: PaginateOptionsDTO): Promise<SalesOrder[]> {
    //     return await this.salesOrderService.findPaginated(paginateOptions);
    // }

    @Get()
    async getmany(@Query() paginateOptions: PaginateOptionsDTO): Promise<PaginationResultInterface> {
        return await this.salesOrderService.findPaginated(paginateOptions);
    }




}

