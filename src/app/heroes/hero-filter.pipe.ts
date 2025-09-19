import { Pipe, PipeTransform } from '@angular/core';
import { HereosInterfase } from './hereos-interfase';

@Pipe({
  name: 'heroFilter',
  standalone: false
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: HereosInterfase[], arg: string): HereosInterfase[] {

    let filter:string = arg ? arg.toLocaleLowerCase() : ''

    return filter? value.filter((heroe:HereosInterfase) =>
      heroe.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
