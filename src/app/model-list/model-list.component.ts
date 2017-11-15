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

  constructor(gridService: GridService) {
    this.gridModel = gridService.model();
    this.fillModels();
  }

  fillModels() {
    const model = this.gridModel;
    const keys = Object.keys(model)
      .filter(p => !p.endsWith('Changed'))
      .sort();

    this.models = keys.map(key => ({
      name: key,
      accessor: model[key]
    }));
  }
}

