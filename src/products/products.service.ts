import { Injectable } from '@nestjs/common';
import Product from './product.interface';

@Injectable()
export class ProductsService {
  findAll() {
    return 'This action returns all products';
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  create(product: Product) {
    console.log('This action create a new product');
    return product;
  }

  update(id: number, product: Product) {
    console.log(`This action updates a #${id} product`);
    return product;
  }

  remove(id: number) {
    console.log(`This action removes a #${id} product`);
  }
}
