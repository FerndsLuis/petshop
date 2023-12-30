export interface IContract {
  erros: any[];
  validate(model: any): boolean;
}
