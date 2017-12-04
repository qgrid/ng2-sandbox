import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { QGridComponent } from './grid.component';
import { GridModule } from 'ng2-qgrid';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    HttpModule
  ],
  declarations: [
    QGridComponent
  ],
  providers: [],
  exports: [QGridComponent]
})
export class QGridModule { }
