import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataProviderService {
  constructor(private http: HttpClient) { }

  getAirlinesOverviewData(): Observable<any> {
    return this.http.get('https://www.kayak.com/h/mobileapis/directory/airlines');
  }
}