import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listo'
})
export class ListoPipe implements PipeTransform {

  transform(listo : string): any {
    if(listo){
     listo='https://image.flaticon.com/icons/svg/3063/3063038.svg';
    }
    return listo;
  }

}
