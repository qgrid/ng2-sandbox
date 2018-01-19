import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import {PersistenceService} from '../../../services/persistence.service';

const ENTER = 13;

@Component({
  selector: 'sb-input-editing',
  templateUrl: './input-editing.component.html',
  styleUrls: ['./input-editing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputEditingComponent implements AfterViewInit, OnChanges {

  @Input() key: string;

  @Output() inFocus: EventEmitter<boolean> = new EventEmitter();
  @Output() triggerInputChanges: EventEmitter<string> = new EventEmitter();

  @ViewChild('input', {read: ElementRef}) input: ElementRef;

  constructor(private renderer: Renderer2,
              private persistenceService: PersistenceService) {
  }

  ngAfterViewInit() {
    const input = this.input.nativeElement;

    this.renderer.listen(input, 'keyup', (event) => this.onEnter(event));
    this.renderer.listen(input, 'blur', () => this.onBlur());
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

  onEnter(event) {
    const key = event.keyCode;

    if (key === ENTER) {
      this.emitChanges();
    }
  }

  onBlur() {
    this.emitChanges();
  }

  emitChanges() {
    this.triggerInputChanges.emit(this.key);

    setTimeout(() => {
      this.inFocus.emit(false);
    }, 0);
  }
}

