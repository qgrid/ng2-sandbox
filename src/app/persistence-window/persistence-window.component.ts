import {
  Component, ViewChild, ElementRef, AfterContentInit, ChangeDetectorRef,
  OnDestroy, ChangeDetectionStrategy
} from '@angular/core';
import {PersistenceService} from '../services/persistence.service';
import {GridModel, Grid} from 'ng2-qgrid';
import {Settings} from '../services/settings.model';
import {Subscription} from 'rxjs/Subscription';
import {Helper} from '../services/helpers';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'sb-persistence-window',
  templateUrl: './persistence-window.component.html',
  styleUrls: ['./persistence-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersistenceWindowComponent implements AfterContentInit, OnDestroy {

  @ViewChild('input') input: ElementRef;

  model: GridModel;
  settings: Settings[] = [];

  private subscriptionSett: Subscription;
  private subscriptionEdit: Subscription;
  private subscriptionData: Subscription;

  constructor(public gridService: Grid,
              private cdRef: ChangeDetectorRef,
              private persistenceService: PersistenceService) {

    this.model = gridService.model();
    this.subscriptionSett = this.persistenceService.settings$
      .subscribe((set: Settings) => this.settings.push(set));

    this.subscriptionEdit = this.persistenceService.editing$.subscribe(() => this.initData());
  }

  ngAfterContentInit() {
    this.initData();
  }

  initData() {
    this.subscriptionData = this.persistenceService.loadDataFromStorage().subscribe(value => this.settings = value);
  }

  save(value) {
    this.persistenceService.saveSettings(value);

    this.clearInputField();
  }

  isValidForm(value, settings) {
    return Helper.isValidForm(value, settings);
  }

  clearInputField() {
    this.input.nativeElement.value = '';
  }

  ngOnDestroy() {
    this.subscriptionSett.unsubscribe();
    this.subscriptionEdit.unsubscribe();
    this.subscriptionData.unsubscribe();
  }
}
