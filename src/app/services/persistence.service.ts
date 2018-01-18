import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {GridModel, Grid} from 'ng2-qgrid';
import {clone} from 'lodash';
import {Settings} from './settings.model';
import {Observable} from 'rxjs/Observable';
import {Helper} from './helpers';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

@Injectable()
export class PersistenceService implements OnInit, OnDestroy {
  public model: GridModel;

  public storage$: Subject<Settings> = new Subject<Settings>();
  public settings$: Observable<Settings> = this.storage$.asObservable();
  public subscription: Subscription;

  public notificator: Subject<Settings> = new Subject<Settings>();

  constructor(gridService: Grid) {
    this.model = gridService.model();
    this.subscription = this.storage$.subscribe(value => this.saveInLocalStorage(value));
  }

  ngOnInit() {

  }

  saveSettings(value) {
    const modelState = Helper.settings();

    const settings = new Settings({
      title: value,
      model: this.save(modelState)
    });

    this.storage$.next(settings);
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
    tempValue['modified'] = Helper.getDate();

    const resultedValue = JSON.stringify(tempValue);

    localStorage.setItem(newKey, resultedValue);
    localStorage.removeItem(oldKey);
    this.notificator.next();
  }

  loadDataFromStorage(): Observable<any[]> {
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

    return Observable.of(values);
  }

  saveInLocalStorage(value) {
    const stringified = JSON.stringify(value);

    localStorage.setItem(value.title, stringified);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
