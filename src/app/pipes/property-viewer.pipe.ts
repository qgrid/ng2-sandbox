import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'viewProperties'
})
export class PropertyViewerPipe implements PipeTransform {

  transform(model: any): any {
    let prop = Object.getOwnPropertyNames(model);
    console.log(model);
    return prop;
  }
}
