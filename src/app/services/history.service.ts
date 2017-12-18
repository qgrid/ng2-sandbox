import {Injectable, OnInit} from '@angular/core';
import {GridModel, GridService} from '../../../grid_bundle';

@Injectable()
export class HistoryService implements OnInit {
  public gridModel: GridModel;

  constructor(gridService: GridService) {
    this.gridModel = gridService.model();
  }

  ngOnInit() {
  }

  log() {
    console.log(this.gridModel);
  }

}
