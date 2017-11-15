import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelName'
})
export class ModelNamePipe implements PipeTransform {

  transform(model: any): any {
    return model.name;
  }
}
