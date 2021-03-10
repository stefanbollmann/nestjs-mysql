import { Controller, Get } from '@nestjs/common';
import { SalesorderService } from './salesorder.service'

@Controller('salesorder')
export class SalesorderController {

    constructor(private service: SalesorderService) { }

    @Get()
    // test(): string {
    //     return 'test'
    // }
    getOpenSalesorders() {
        return this.service.findAll();
    }

}
