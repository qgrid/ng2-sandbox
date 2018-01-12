import {Injectable, OnInit} from '@angular/core';
import {GridModel, Grid} from 'ng2-qgrid';
import {clone} from 'lodash';

@Injectable()
export class PersistenceService implements OnInit {
  public model: GridModel;

  constructor(gridService: Grid) {
    this.model = gridService.model();
  }

  ngOnInit() {
  }

  getSettings(value) {
    return {
      title: value,
      modified: this.getDate(),
      model: this.save(),
      isDefault: false
    };
  }

  save(settings?) {
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

  editStorageItem(newKey, oldKey) {
    const oldValue = localStorage.getItem(oldKey);
    const tempValue = JSON.parse(oldValue);

    tempValue['title'] = newKey;
    tempValue['modified'] = this.getDate();

    const resultedValue = JSON.stringify(tempValue);
    localStorage.setItem(newKey, resultedValue);
    localStorage.removeItem(oldKey);
  }

  getDate() {
    let today: Date | string = new Date();
    let day: number | string = today.getDate();
    let month: number | string = today.getMonth() + 1;
    let minutes: number | string = today.getMinutes();

    const hours = today.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const year = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    today = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ampm;

    return today;
  }

}
