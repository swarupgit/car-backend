import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(createCustomerDto);
  }

  async findAll() {
    return await this.customerModel.find({ isDeleted: false });
  }

  async findOne(id: string) {
    return await this.customerModel.findOne({ isDeleted: false, _id: id });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
