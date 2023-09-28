import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return 'This action returns all products';
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  // create(product: Product) {
  //   return 'This action adds a new product';
  // }

  // update(id: number, product: Product) {
  //   return `This action updates a #${id} product`;
  // }
}
