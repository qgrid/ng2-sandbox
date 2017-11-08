import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GridModule } from 'ng2-qgrid';
import { DataService } from './data/data.service';
import { QGridModule } from './q-grid/grid.module';
import { ModelListComponent } from './model-list/model-list.component';
import { ButtonComponent } from './button-component/button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    HttpModule,
    BrowserAnimationsModule,
    QGridModule,
    MdCardModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
