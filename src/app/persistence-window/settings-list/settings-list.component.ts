import {
  AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, Renderer2,
  ViewChild
} from '@angular/core';

import {Grid} from 'ng2-qgrid';
import {PersistenceService} from '../../services/persistence.service';

@Component({
  selector: 'sb-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements AfterViewInit {
  @Input() key: string;
  @Input() model: string;
  @Input() modified: string;

  componentExist = true;

  @ViewChild('content', {read: ElementRef}) buttonContent: ElementRef;
  @ViewChild('default', {read: ElementRef}) buttonDefault: ElementRef;
  @ViewChild('edit', {read: ElementRef}) buttonEdit: ElementRef;
  @ViewChild('remove', {read: ElementRef}) buttonRemove: ElementRef;

  constructor(private persistenceService: PersistenceService,
              private renderer: Renderer2,
              private grid: Grid) {
  }

  ngAfterViewInit() {
    const buttonContent = this.buttonContent.nativeElement;
    const buttonDefault = this.buttonDefault.nativeElement;
    const buttonEdit = this.buttonEdit.nativeElement;
    const buttonRemove = this.buttonRemove.nativeElement;

    this.renderer.listen(buttonContent, 'click', () => this.loadModel());
    this.renderer.listen(buttonDefault, 'click', () => this.asDefault());
    this.renderer.listen(buttonEdit, 'click', () => this.edit());
    this.renderer.listen(buttonRemove, 'click', () => this.remove());
  }

  loadModel() {
    this.persistenceService.load(this.model);
  }

  asDefault() {
    console.log('in progress');
  }

  edit() {
    console.log('in progress');
  }

  remove() {
    localStorage.removeItem(this.key);
    this.componentExist = false;
  }
}
