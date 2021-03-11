import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salesorder } from './salesorder.entity';

@Injectable()
export class SalesorderService {
  constructor(
    @InjectRepository(Salesorder)
    private salesorderRepository: Repository<Salesorder>,
  ) { }

  findAll(): Promise<Salesorder[]> {
    return this.salesorderRepository.find({
      select: ['Id', 'cutomerShortName', 'orderDescription', 'costCenterId'],
      where: [{ jobDone: 0, orderCompleted: 0 }],
    })

  }
}