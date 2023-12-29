import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Obter os clientes';
  }

  @Post()
  post() {
    return 'Criar um clientes';
  }

  @Put()
  put() {
    return 'Atualizar um clientes';
  }

  @Delete()
  delete() {
    return 'Remover um clientes';
  }
}
