import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule
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
    FormsModule,
    HttpModule,
    GridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QGridModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
