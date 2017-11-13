import { Component, OnInit } from '@angular/core';
import { GridModel, GridService } from 'ng2-qgrid';

@Component({
  selector: 'sb-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent {
  public gridModel: GridModel;
  public models: string[] = [];
  public list: any[] = [];

  constructor(gridService: GridService) {
    this.gridModel = gridService.model();
    this.models = Object.keys(this.gridModel).filter(p => !p.endsWith('Changed')).sort();
    this.fillListWithModels();
  }

  fillListWithModels() {
    for (let i = 0, max = this.models.length; i < max; i++) {
      this.list.push(this.gridModel[this.models[i]]());
    }
  }
}
