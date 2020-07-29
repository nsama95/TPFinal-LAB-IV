import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entrevista'
})
export class EntrevistaPipe implements PipeTransform {

  transform(listo : string): any{
    if(listo){
      listo='https://www.flaticon.es/premium-icon/icons/svg/2105/2105996.svg';
     }
     return listo;
  }

}
