import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editConstructorName'
})
export class ConstructorNameEditorPipe implements PipeTransform {

  transform(name: string): any {
    let i = name.indexOf('Model');
    let str = name.substring(0, i);
    return str;
  }
}
