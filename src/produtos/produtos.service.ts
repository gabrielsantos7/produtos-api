import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  getHello(): string {
    return 'Hello World from Produto Service!';
  }
}
