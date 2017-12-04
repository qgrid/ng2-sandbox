import {Component} from '@angular/core';
import {GridModel, GridService} from 'ng2-qgrid';

@Component({
  selector: 'sb-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent {
  public gridModel: GridModel;
  public models: any[] = [];
  public service: any;

  constructor(grid: GridService) {
    this.gridModel = grid.model();
    this.service = grid.service(this.gridModel);
    this.fillModels();
  }

  fillModels() {
    const model = this.gridModel;
    const keys = Object.keys(model)
      .filter(p => !p.endsWith('Changed'))
      .sort();

    this.models = keys.map(key => {
      const modelAccessor = model[key];

      return {
        name: key,
        accessor: (...args) => {
          if (args.length) {
            modelAccessor(...args);
            this.service.invalidate();
            return;
          }

          return modelAccessor();
        }
      }
    });
  }
}

