import { Injectable, NotFoundException } from '@nestjs/common';
import Product from './product.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  private throwProductNotFoundException(): never {
    throw new NotFoundException('Product not found.');
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async findById(id: number): Promise<Product> {
    const product = this.productModel.findByPk(id);
    if (!product) {
      this.throwProductNotFoundException();
    }
    return product;
  }

  async create(product: Product) {
    const createdProduct = await this.productModel.create(product);
    return createdProduct;
  }

  async update(product: Product): Promise<[number]> {
    return this.productModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }

  async remove(id: number) {
    const savedProduct: Product = await this.findById(id);
    savedProduct.destroy();
  }
}
