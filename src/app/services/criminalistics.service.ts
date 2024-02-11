import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GridInjectionService, GridRequestInterface } from 'angular-mko-lib';
import { Observable, map } from 'rxjs';
import { GridResponseInterface } from 'angular-mko-lib/lib/models/table-response.model';
import { CrimeResponseInterface } from '../models/criminalistics.model';

@Injectable({
  providedIn: 'root',
})
export class CriminalisticsService implements GridInjectionService {
  constructor(private http: HttpClient) { }

  getData(params: GridRequestInterface): Observable<GridResponseInterface> {
    return this.http.get<CrimeResponseInterface>(`${environment.API_URL}/criminalistics`, { params: this.createFilterParams(params) })
      .pipe(
        map(response => <GridResponseInterface>{
          total: response.items,
          results: response.data,
          page: response.next
        })
      );
  }

  private createFilterParams(filters: GridRequestInterface): HttpParams {
    let params = new HttpParams()
      .set('_page', filters.page)
      .set('_per_page', filters.limit);

    if (filters.order) {
      // Apply json-server syntax for sorting criteria in the HTTP parameters.
      params = params
        .set('_sort', filters.order.type === 'asc' ? filters.order.by : `-${filters.order.by}`);
    }

    return params;
  }
}
