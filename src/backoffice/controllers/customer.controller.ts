import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CustomerModel } from '../models/customer.model';
import { ResultModel } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new ResultModel(null, true, [], null);
  }

  @Get(':document')
  getById(@Param('document') document) {
    return new ResultModel(null, true, {}, null);
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() body: CustomerModel) {
    return new ResultModel('Cliente criado', true, body, null);
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new ResultModel('Cliente atualizado', true, body, null);
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return new ResultModel('Cliente removido', true, null, null);
  }
}
