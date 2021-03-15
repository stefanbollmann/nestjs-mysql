import { Controller, Get } from '@nestjs/common';
import { SalesOrderService } from './salesorder.service'

@Controller('salesorders')
export class SalesorderController {

    constructor(private service: SalesOrderService) { }

    @Get()
    getOpenSalesorders() {
        return this.service.findAll();
    }

}
