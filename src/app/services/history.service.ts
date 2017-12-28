import {Injectable, OnInit} from '@angular/core';
import {GridModel, Grid} from 'ng2-qgrid';

@Injectable()
export class HistoryService implements OnInit {
  public gridModel: GridModel;

  constructor(gridService: Grid) {
    this.gridModel = gridService.model();
  }

  ngOnInit() {
  }

  log() {
    console.log(this.gridModel);
  }

}
