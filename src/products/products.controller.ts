import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import Product from './product.model';

@Controller('produtos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findById(+id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.update(+id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const success = this.productsService.remove(+id);
    return success
      ? `The product with id #${id} has been successfully deleted.`
      : new NotFoundException('Product not found.');
  }
}
