import { Component, OnInit } from '@angular/core';
import { GridModel, GridService } from 'ng2-qgrid';

@Component({
  selector: 'sb-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {
  public gridModel: GridModel;
  public list: any[] = [];
  public models: string[] = [
    'data',
    'selection',
    'sort',
    'group',
    'pivot',
    'edit',
    'style',
    'action'
  ];

  constructor(gridService: GridService) {
    this.gridModel = gridService.model();
  }

  ngOnInit() {
    this.fillListWithModels();
  }

  fillListWithModels() {
    for (let i = 0, max = this.models.length; i < max; i++) {
      this.list.push(this.gridModel[this.models[i]]());
    }
  }
}
