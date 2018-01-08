import {Component, OnInit, Inject, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PersistenceService} from '../services/persistence.service';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {GridModel, Grid} from 'ng2-qgrid';

class SettingsModel {
  title: string;
  modified: string;
  model: any;
  isDefault: boolean;
}

@Component({
  selector: 'sb-persistence-window',
  templateUrl: './persistence-window.component.html',
  styleUrls: ['./persistence-window.component.css']
})
export class PersistenceWindowComponent implements OnInit, AfterContentInit {
  @ViewChild('input') input: ElementRef;

  model: GridModel;
  title: string;
  name: any;
  settings: any[] = [];
  storageKey: string;
  items: any = [];

  modelSettings = {
    group: ['by'],
    sort: ['by'],
    pivot: ['by'],
    filter: ['by']
  };

  constructor(private persistenceService: PersistenceService,
              gridService: Grid,
              public dialogRef: MatDialogRef<PersistenceWindowComponent>,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.model = gridService.model();
    this.storageKey = `q-grid:${this.model.grid().id}:${this.model.persistence().id}:persistence-list`;

    this.model.persistence()
      .storage
      .getItem(this.storageKey)
      .then(items => {
        this.items = items || [];
        const defaultItem = this.items.find(item => item.isDefault);
        if (defaultItem) {
          this.persistenceService.load(defaultItem.model);
        }
      });
  }

  ngAfterContentInit() {
    this.settings = this.loadData();
  }

  ngOnInit() {

  }

  loadData() {

    const storageKeys = [];

    if (localStorage.length) {

      const objKeys = Object.keys(localStorage);

      for (let i = 0, max = objKeys.length; i < max; i++) {
        const temp = objKeys[i];
        const item = localStorage.getItem(temp);
        storageKeys.push(item);
      }

    }
    debugger;
    return storageKeys;
  }

  parseData() {
    const items = [];
  }

  isValidForm(value) {
    return !!value;
  }

  save(value) {

    const set = {
      title: value,
      modified: this.getDate(),
      model: this.persistenceService.save(this.modelSettings),
      isDefault: false
    };

    this.settings.push(set);
    debugger;
    this.model.persistence()
      .storage
      .setItem(value, set);

    this.clearInputField();
  }

  clearInputField() {
    this.input.nativeElement.value = '';
  }

  getDate() {
    let today: Date | string = new Date();
    let day: number | string = today.getDate();
    let month: number | string = today.getMonth() + 1;

    const minutes = today.getMinutes();
    const hours = today.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const year = today.getFullYear();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    today = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ampm;

    return today;
  }

  onNoClick(): void {
    //this.dialogRef.close();
  }

}

// action: ['items'],
// body: [],
// columnlist: ['index', 'columns', 'reference'],
// data: ['rows', 'columns'],
// drag: ['isActive'],
// edit: ['mode', 'state'],
// export: [],
// fetch: ['skip'],
// filter: ['by', 'unit'],
// focus: ['rowIndex', 'columnIndex', 'isActive'],
// foot: [],
// grid: ['id', 'status', 'title'],
// group: ['mode', 'by'],
// head: [],
// highlight: ['columns', 'rows'],
// import: [],
// layer: [],
// layout: ['columns'],
// navigation: ['cell'],
// pagination: ['current', 'size', 'sizeList', 'count'],
// persistence: ['id'],
// pivot: ['by'],
// plugin: [],
// progress: ['isBusy', 'queue'],
// row: ['mode', 'unit'],
// scene: ['status', 'round', 'rows'],
// scroll: ['mode', 'top', 'left', 'cursor'],
// selection: ['unit', 'mode', 'items', 'area'],
// sort: ['by', 'mode', 'trigger'],
// style: [],
// template: [],
// toolbar: [],
// validation: ['rules'],
// view: ['rows', 'columns', 'nodes'],
// visibility: ['head', 'foot', 'body']
