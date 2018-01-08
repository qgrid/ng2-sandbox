import {Injectable, OnInit} from '@angular/core';
import {GridModel, Grid} from 'ng2-qgrid';
import {clone} from 'lodash';

@Injectable()
export class PersistenceService implements OnInit {
  public model: GridModel;
  public localStorage;

  constructor(gridService: Grid) {
    this.model = gridService.model();
    this.localStorage = this.model.persistence().storage.storage;
  }

  ngOnInit() {
  }

  save(settings) {
    const gridModel = this.model;
    settings = settings || gridModel.persistence().settings;

    const model = {};
    for (const key in settings) {
      const source = gridModel[key]();
      const target = {};
      model[key] = target;
      for (const p of settings[key]) {
        const value = source[p];
        target[p] = clone(value);
      }
    }

    return model;
  }

  load(model, settings?) {
    const gridModel = this.model;
    settings = settings || gridModel.persistence().settings;

    for (let key in settings) {
      const source = model[key];
      const target = gridModel[key];
      target(source);
    }

    return model;
  }

}
