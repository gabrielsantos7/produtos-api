import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export default class Product extends Model<Product> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;
}
