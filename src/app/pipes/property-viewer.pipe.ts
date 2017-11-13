import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyViewer'
})
export class PropertyViewerPipe implements PipeTransform {

  transform(model: any): any {
    let map = this.propertiesToMap(model);

    return map;
  }

  propertiesToMap(model: any): Map<string, any> {
    let keys = Object.keys(model);
    let values = Object.values(model);
    let map = new Map();

    for(let i = 0; i < keys.length; i++) {
      map.set(keys[i], values[i]);
    }

    return map;
  }
}
