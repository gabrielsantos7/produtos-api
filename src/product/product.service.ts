import { Injectable, NotFoundException } from '@nestjs/common';
import Product from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    // new Product(1, 'P001', 'Product 1', 10.99),
    // new Product(2, 'P002', 'Product 2', 15.99),
    // new Product(3, 'P003', 'Product 3', 20.99),
  ];

  private throwProductNotFoundException(): never {
    throw new NotFoundException('Product not found.');
  }

  findAll() {
    return this.products;
  }

  findById(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      this.throwProductNotFoundException();
    }
    return product;
  }

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: number, product: Product): Product {
    const productIndex = this.products.findIndex((prod) => prod.id === id);

    if (productIndex === -1) {
      this.throwProductNotFoundException();
    }

    product.id = id;
    this.products[productIndex] = product;

    return product;
  }

  remove(id: number): boolean {
    const indexToRemove = this.products.findIndex(
      (product) => product.id === id,
    );

    if (indexToRemove === -1) {
      this.throwProductNotFoundException();
    }

    this.products.splice(indexToRemove, 1);
    return true;
  }
}
