export class CreditCardModel {
  constructor(
    public holder: string,
    public number: string,
    public expiration: string,
  ) {}
}
