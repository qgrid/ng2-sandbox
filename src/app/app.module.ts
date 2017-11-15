import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule,
  MdExpansionModule,
  MdCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { GridModule } from 'ng2-qgrid';
import { DataService } from './data/data.service';
import { QGridModule } from './q-grid/grid.module';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelPanelComponent } from './model-panel/model-panel.component';
import { ModelNamePipe } from './pipes/model-name.pipe';
import { ModelPropertyListComponent } from './model-property-list/model-property-list.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ModelPanelComponent,
    ModelNamePipe,
    ModelPropertyListComponent,
    PropertyListComponent
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
    MdToolbarModule,
    MdExpansionModule,
    MdCheckboxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
