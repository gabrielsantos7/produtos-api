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

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(+id);
  }

  @Post()
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put()
  async update(@Body() product: Product): Promise<[number]> {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const success = this.productService.remove(+id);
    return success
      ? `The product with id #${id} has been successfully deleted.`
      : new NotFoundException('Product not found.');
  }
}
