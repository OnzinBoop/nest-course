import { CoffeesService } from './coffees.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateCoffeDto } from './dto/update-coffe.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) { }

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
