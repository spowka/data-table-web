import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  ClickByRowEventInterface,
  ColumnPropertiesInterface,
  DataTableComponent,
  EmptyEventInterface,
  ErrorEventInterface,
  GridApi,
  UpdatedEventInterface
} from 'angular-mko-lib';

import { CrimeDateComponent } from './components/crime-date/crime-date.component';
import { CriminalisticsService } from './services/criminalistics.service';
import { CriminalisticsTableDefinitions } from './constants/criminalistics-table-definitions';

import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DataTableComponent,
    CrimeDateComponent,
    HttpClientModule
  ],
  providers: [CriminalisticsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public token = `${environment.API_URL}/criminalistics`
  public columnDefs: ColumnPropertiesInterface[] = CriminalisticsTableDefinitions;

  constructor() { }

  onGridReady(api: GridApi) {
    api.getData(this.token);
  }

  onClickByRowEvent(event: ClickByRowEventInterface) {
    console.log("🚀 ~ AppComponent ~ onClickByRowEvent ~ event:", event)
  }

  onEmptyEvent(event: EmptyEventInterface) {
    console.log("🚀 ~ AppComponent ~ onEmptyEvent ~ event:", event)
  }

  onUpdatedEvent(event: UpdatedEventInterface) {
    console.log("🚀 ~ AppComponent ~ onUpdatedEvent ~ event:", event)
  }

  onErrorEvent(event: ErrorEventInterface) {
    console.log("🚀 ~ AppComponent ~ onErrorEvent ~ event:", event)
  }
}
