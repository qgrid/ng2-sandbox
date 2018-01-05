import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatFormFieldModule,
  MatChipsModule,
  MatListModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelPanelComponent } from './model-panel/model-panel.component';
import { ModelPropertyListComponent } from './model-property-list/model-property-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PersistenceWindowComponent } from './persistence-window/persistence-window.component';

import { GridModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';
import { QGridModule } from './q-grid/grid.module';

import { ModelNamePipe } from './pipes/model-name.pipe';

import { DataService } from './services/data.service';
import { PersistenceService } from './services/persistence.service';
import { SettingsListComponent } from './persistence-window/settings-list/settings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ModelPanelComponent,
    ModelNamePipe,
    ModelPropertyListComponent,
    PropertyListComponent,
    PersistenceWindowComponent,
    SettingsListComponent
  ],
  entryComponents: [PersistenceWindowComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    GridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QGridModule,
    ThemeModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatChipsModule,
    MatListModule,
    MatDialogModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [DataService, PersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
