import {Component, Inject, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PersistenceService} from '../services/persistence.service';
import {GridModel, Grid} from 'ng2-qgrid';

@Component({
  selector: 'sb-persistence-window',
  templateUrl: './persistence-window.component.html',
  styleUrls: ['./persistence-window.component.css']
})
export class PersistenceWindowComponent implements AfterContentInit {
  @ViewChild('input') input: ElementRef;

  model: GridModel;
  settings: any[] = [];

  constructor(private persistenceService: PersistenceService,
              gridService: Grid) {
    this.model = gridService.model();
  }

  ngAfterContentInit() {
    this.settings = this.loadData();
  }

  loadData() {
    const values = [];

    if (localStorage.length) {
      const keys = Object.keys(localStorage);

      for (let i = 0, max = keys.length; i < max; i++) {
        const key = keys[i];
        const item = localStorage.getItem(key);
        const parsed = JSON.parse(item);

        values.push(parsed);
      }

    }

    return values;
  }

  save(value) {

    const set = {
      title: value,
      modified: this.getDate(),
      model: this.persistenceService.save(),
      isDefault: false
    };

    this.settings.push(set);

    this.model.persistence()
      .storage
      .setItem(value, set);

    this.clearInputField();
  }

  isValidForm(value) {
    return this.stringNotEmpty(value) && this.uniqTitle(value);
  }

  stringNotEmpty(value) {
    return !!value;
  }

  uniqTitle(value) {
    const settings = this.settings;
    const title = value.toLowerCase();
    return !settings.some(set => set.title.toLowerCase() === title);
  }

  clearInputField() {
    this.input.nativeElement.value = '';
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
