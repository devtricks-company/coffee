import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/coffee.entity';
import { Model } from 'mongoose';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}
  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(createCoffeeDto);
    return coffee.save();
  }

  findAll() {
    return this.coffeeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return `This action updates a #${id} coffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
