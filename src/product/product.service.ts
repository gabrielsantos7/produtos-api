import { Injectable } from '@nestjs/common';
import Product from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product(1, 'P001', 'Product 1', 10.99),
    new Product(2, 'P002', 'Product 2', 15.99),
    new Product(3, 'P003', 'Product 3', 20.99),
  ];

  findAll() {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: number, product: Product) {
    //this.products[id] = product;
    return product;
  }

  remove(id: number) {
    const indexToRemove = this.products.findIndex(
      (product) => product.id === id,
    );

    if (indexToRemove !== -1) {
      this.products.splice(indexToRemove, 1);
      return true; // Indica que a remoção foi bem-sucedida
    }

    return false; // Indica que o produto com o ID especificado não foi encontrado
  }
}
