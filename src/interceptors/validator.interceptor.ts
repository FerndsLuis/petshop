import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IContract } from 'src/backoffice/contracts/contracts';
import { ResultModel } from 'src/backoffice/models/result.model';

@Injectable()
export class ValidatorInterceptor implements NestInterceptor {
  constructor(public contract: IContract) {}

  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const body = context.switchToHttp().getRequest().body;
    const valid = this.contract.validate(body);

    if (!valid) {
      throw new HttpException(
        new ResultModel(
          'Ops... algo saiu errado',
          false,
          null,
          this.contract.erros,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    return call$;
  }
}
