import { PaginateOptionsDTO } from '@common/dto/paginate-options.dto';
import { PaginationResultDTO } from '@common/dto/pagination-result.dto';
import { SalesOrder } from '@model/sales-order/sales-order.model';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { SalesOrderService } from '../service/sales-order.service'

@Controller('active-sales-orders')
export class ActiveSalesOrderController {

    constructor(private salesOrderService: SalesOrderService) { }

    @Get(':_id')
    async findOne(@Param() params): Promise<SalesOrder> {
        return await this.salesOrderService.findById(params._id);
    }

    @Get()
    async getMany(@Query() paginateOptions: PaginateOptionsDTO): Promise<PaginationResultDTO<SalesOrder>> {
        return await this.salesOrderService.findPaginated(paginateOptions);
    }
}

