import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'sb-buttons-menu',
  templateUrl: './buttons-menu.component.html',
  styleUrls: ['./buttons-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsMenuComponent implements AfterViewInit {

  @Input() key: string;

  @Output() removeComponent: EventEmitter<void> = new EventEmitter();
  @Output() canEdit: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('default', {read: ElementRef}) buttonDefault: ElementRef;
  @ViewChild('edit', {read: ElementRef}) buttonEdit: ElementRef;
  @ViewChild('remove', {read: ElementRef}) buttonRemove: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const buttonDefault = this.buttonDefault.nativeElement;
    const buttonEdit = this.buttonEdit.nativeElement;
    const buttonRemove = this.buttonRemove.nativeElement;

    this.renderer.listen(buttonDefault, 'click', () => this.asDefault());
    this.renderer.listen(buttonEdit, 'click', () => this.edit());
    this.renderer.listen(buttonRemove, 'click', () => this.remove());
  }

  asDefault() {
    console.log('in progress');
  }

  edit() {
    this.canEdit.emit(true);
  }

  remove() {
    localStorage.removeItem(this.key);
    this.removeComponent.emit();
  }

}
