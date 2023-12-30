import { AddressModel } from './address.model';
import { CreditCardModel } from './credit-card.model';
import { PetModel } from './pet.model';

export class CustomerModel {
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public pets: PetModel[],
    public billingAddress: AddressModel,
    public shippingAddress: AddressModel,
    public creditCard: CreditCardModel,
    public password: string,
    public active: boolean,
  ) {}
}
