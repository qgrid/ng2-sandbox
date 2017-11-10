import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QGridComponent } from './grid.component';
import { GridModule } from 'ng2-qgrid';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [
    QGridComponent
  ],
  providers: [],
  exports: [QGridComponent]
})
export class QGridModule { }
