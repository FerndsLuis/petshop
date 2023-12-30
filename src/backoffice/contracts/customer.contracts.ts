import { Flunt } from 'src/utils/flunt';
import { CustomerModel } from '../models/customer.model';
import { IContract } from './contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerContract implements IContract {
  erros: any[];
  validate(model: CustomerModel): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.name, 5, 'Nome inválido');
    flunt.isEmail(model.email, 'E-mail inválido');
    flunt.isFixedLen(model.document, 11, 'CPF inválido');
    flunt.hasMinLen(model.password, 6, 'Senha inválido');

    this.erros = flunt.errors;

    //return flunt.isValid();
    return this.erros.length === 0;
  }
}
