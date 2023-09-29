import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import Product from './product/product.model';

@Module({
  imports: [
    ConfigModule.forRoot(), // Carrega as variáveis de ambiente
    SequelizeModule.forRootAsync({
      useFactory: async () => ({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
