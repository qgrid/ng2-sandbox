import {
  Component, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef, QueryList,
  OnDestroy
} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PersistenceService} from '../services/persistence.service';
import {GridModel, Grid} from 'ng2-qgrid';
import {Settings} from '../services/settings.model';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Helper} from '../services/helpers';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'sb-persistence-window',
  templateUrl: './persistence-window.component.html',
  styleUrls: ['./persistence-window.component.css']
})
export class PersistenceWindowComponent implements AfterContentInit, OnDestroy {
  @ViewChild('input') input: ElementRef;

  model: GridModel;
  settings: Settings[] = [];
  subscription: Subscription;

  constructor(
    private persistenceService: PersistenceService,
    public gridService: Grid,
    private cdRef: ChangeDetectorRef) {

    this.model = gridService.model();
    this.subscription = this.persistenceService.settings$
      .subscribe((set: Settings) => this.settings.push(set));

    this.persistenceService.notificator.subscribe(() => this.initData());
  }

  ngAfterContentInit() {
    this.initData();
  }

  initData() {
    this.persistenceService.loadDataFromStorage().subscribe(value => this.settings = value);
  }

  save(value) {
    this.persistenceService.saveSettings(value);

    this.clearInputField();
  }

  isValidForm(value) {
    return Helper.isValidForm(value);
  }

  clearInputField() {
    this.input.nativeElement.value = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
