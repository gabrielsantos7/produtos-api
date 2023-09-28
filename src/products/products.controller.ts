import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('produtos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  // @Post()
  // create(@Body() product: Product) {
  //   return this.productsService.create(product);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() product: Product) {
  //   return this.productsService.update(+id, product);
  // }
}
