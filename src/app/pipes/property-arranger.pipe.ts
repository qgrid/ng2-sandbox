import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyArranger'
})
export class PropertyArrangerPipe implements PipeTransform {

  transform(map: Map<string, any>): any {
    return this.makeList(map);
  }

  makeList(map: Map<string, any>): any {
    let keysIterator = map.keys();
    let valuesIterator = map.values();
    let size = map.size;

    let result = keysIterator.next().value;

    return result;

  }

  booleanCheckbox(value: any) {

  }

  numberInput() {

  }

  defaultMarkup(value) {
    return (typeof value) + '!';
  }

  defineType(value: any) {
    return typeof value;
  }

  iteratee() {

  }
}
