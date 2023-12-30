export class ResultModel {
  constructor(
    public message: string,
    public success: boolean,
    public data: any,
    public error: any,
  ) {}
}
