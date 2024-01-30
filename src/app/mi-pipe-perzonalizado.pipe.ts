import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePerzonalizado'
})
export class MiPipePerzonalizadoPipe implements PipeTransform {

  transform(valor : string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}
