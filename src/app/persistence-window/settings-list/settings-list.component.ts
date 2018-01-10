import {
  AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild
} from '@angular/core';

import {Grid} from 'ng2-qgrid';
import {PersistenceService} from '../../services/persistence.service';

@Component({
  selector: 'sb-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements AfterViewInit {

  @ViewChild('content', {read: ElementRef}) buttonContent: ElementRef;

  @Input() key: string;
  @Input() model: string;
  @Input() modified: string;

  componentExist = true;
  allowEditing = false;

  constructor(private persistenceService: PersistenceService,
              private renderer: Renderer2,
              private grid: Grid) {}

  ngAfterViewInit() {
    const buttonContent = this.buttonContent.nativeElement;

    this.renderer.listen(buttonContent, 'click', () => this.loadModel());
  }

  loadModel() {
    this.persistenceService.load(this.model);
  }

  removeComponent() {
    this.componentExist = false;
  }

  canEdit(event) {
    this.allowEditing = event;
  }
}
