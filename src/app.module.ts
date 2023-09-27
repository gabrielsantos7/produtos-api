import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/produtos.service';

@Module({
  imports: [],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class AppModule {}
