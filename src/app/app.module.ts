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
import { ButtonComponent } from './button-component/button-component.component';
import { PropertyViewerPipe } from './pipes/property-viewer.pipe';
import { ConstructorNameEditorPipe } from './pipes/constructor-name-editor.pipe';
import { PropertyArrangerPipe } from './pipes/property-arranger.pipe';
import { PropertyRowComponent } from './property-row/property-row.component';
import { PropertyTableComponent } from './property-table/property-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ButtonComponent,
    PropertyViewerPipe,
    ConstructorNameEditorPipe,
    PropertyArrangerPipe,
    PropertyRowComponent,
    PropertyTableComponent
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
