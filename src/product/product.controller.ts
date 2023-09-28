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
import { ProductService } from './product.service';
import Product from './product.model';

@Controller('produtos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findById(+id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productService.update(+id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const success = this.productService.remove(+id);
    return success
      ? `The product with id #${id} has been successfully deleted.`
      : new NotFoundException('Product not found.');
  }
}
