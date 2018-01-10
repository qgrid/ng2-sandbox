import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import {PersistenceService} from '../../../services/persistence.service';

const ENTER = 13;

@Component({
  selector: 'sb-input-editing',
  templateUrl: './input-editing.component.html',
  styleUrls: ['./input-editing.component.css']
})
export class InputEditingComponent implements AfterViewInit, OnChanges {

  @Input() key: string;

  @Output() inFocus: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('input', {read: ElementRef}) input: ElementRef;

  constructor(private renderer: Renderer2,
              private cdRef: ChangeDetectorRef,
              private persistenceService: PersistenceService) {}

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    //this.cdRef.markForCheck();
    this.renderer.listen(input, 'blur', () => this.focus());
    this.renderer.listen(input, 'keyup', () => this.keyPress(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    const key = changes['key'];

    if (!key.firstChange) {
      const currentValue = key.currentValue;
      const previousValue = key.previousValue;

      if (currentValue !== previousValue) {
        this.persistenceService.editStorageItem(currentValue, previousValue);
      }
    }
  }

  keyPress(event) {
    event.preventDefault();

    if (event.keyCode === ENTER) {
      debugger;
      this.key = this.input.nativeElement.value;
    }
  }

  focus() {

    this.inFocus.emit(false);
  }

}
