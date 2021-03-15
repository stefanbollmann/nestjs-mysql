import { Controller, Get } from '@nestjs/common';
import { SalesOrderService } from '../service/salesorder.service'

@Controller('salesorders')
export class SalesOrderController {

    constructor(private service: SalesOrderService) { }

    @Get()
    getActiveSalesorders() {
        return this.service.findActiveSalesOrders();
    }

}
