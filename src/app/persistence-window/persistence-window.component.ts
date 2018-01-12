import {Component, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef} from '@angular/core';
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

    const set = this.persistenceService.getSettings(value);

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
}
