import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Airline } from '../airlines-module/models/Airline';

@Injectable()
export class DataProviderService {
  private airlineDataStorageKey: string = 'airlinesData';
  private lastUpdateStorageKey: string = 'lastUpdate';

  constructor(private http: HttpClient) { }

  // if there is cached data, which is not older than 12 hours, return it
  // else get new one
  public getAirlinesOverviewData(): Subject<Airline[]> {
    const resultSubject = new Subject<Airline[]>();

    if(this.isDataCached()) {
      setTimeout(() => {
        const result = JSON.parse(localStorage.getItem(this.airlineDataStorageKey));
        resultSubject.next(result);
      });
    }
    else {
      this.http.get('https://www.kayak.com/h/mobileapis/directory/airlines').subscribe((data: any[]) => {
        const result = data.map((item: any) => {
          return <Airline> ({
            defaultName: item.defaultName,
            code: item.code,
            logoSrc: `https://www.kayak.com${item.logoURL}`,
            contact: {
              siteUrl: item.site,
              phone: item.phone,
            }
          });
        })
        resultSubject.next(result);

        // update cache items
        localStorage.setItem(this.airlineDataStorageKey, JSON.stringify(result));
        localStorage.setItem(this.lastUpdateStorageKey, JSON.stringify(new Date()));
      });
    }
    // localStorage.removeItem(this.lastUpdateStorageKey);

    return resultSubject;
  }

  public getAirlineDetail(code: string): Subject<Airline> {
    const resultSubject = new Subject<Airline>();

    this.getAirlinesOverviewData().subscribe((result) => {
      let airline: Airline = result.find(airline => airline.code === code);

      resultSubject.next(airline);
      resultSubject.complete();
    });
    return resultSubject;
  }

  
  private isDataCached(): boolean {
    const data = localStorage.getItem(this.airlineDataStorageKey);
    const lastUpdate = new Date(JSON.parse(localStorage.getItem(this.lastUpdateStorageKey)));
    const actualDate = new Date();

    if(data !== null && lastUpdate !== null && (Math.floor((actualDate.getTime() - lastUpdate.getTime()) / (1000*60*60))) < 12)
      return true;
    else 
      return false;
  }
}