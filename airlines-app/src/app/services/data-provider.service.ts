import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Airline } from '../airlines-overview-module/Airline';

@Injectable()
export class DataProviderService {
  private airlineDataStorageKey: string = 'airlinesData';
  private lastUpdateStorageKey: string = 'lastUpdate';

  constructor(private http: HttpClient) { }

  getAirlinesOverviewData(): Subject<any> {
    const sbj = new Subject<any>();

    const data = localStorage.getItem(this.airlineDataStorageKey);
    const lastUpdate = new Date(JSON.parse(localStorage.getItem(this.lastUpdateStorageKey)));
    const actualDate = new Date();

    // if there is cached data, which is not older than 12 hours, return it
    // else get new one
    if (data !== null && lastUpdate !== null && (Math.floor((actualDate.getTime() - lastUpdate.getTime()) / (1000*60*60))) < 12) {
      console.log('returning cached data');
      setTimeout(() => {
        sbj.next(JSON.parse(localStorage.getItem(this.airlineDataStorageKey)));
        sbj.complete();
      });
    }
    else {
      this.http.get('https://www.kayak.com/h/mobileapis/directory/airlines').subscribe((result) => {
        const data = result;

        // remove old data and save new
        localStorage.removeItem(this.airlineDataStorageKey);
        localStorage.setItem(this.airlineDataStorageKey, JSON.stringify(data));
  
        // remove information about last update and save new one
        localStorage.removeItem(this.lastUpdateStorageKey);
        localStorage.setItem(this.lastUpdateStorageKey, JSON.stringify(actualDate));
        setTimeout(() => {
          sbj.next(data);
          sbj.complete();
        });
        
        console.log('returning fresh data');
      });
    }

    return sbj;
  }

  public getAirlineDetail(code: string): Subject<Airline> {
    const sbj = new Subject<any>();
    this.getAirlinesOverviewData().subscribe((result) => {
      let airline: Airline = result.filter(x => x.code === code).map(item => {
        return <Airline> ({
          defaultName: item.defaultName,
          code: item.code,
          logoSrc: `https://www.kayak.com${item.logoURL}`,
          contact: {
            siteUrl: item.site,
            phone: item.phone,
          }
        });
      });
      sbj.next(airline[0]);
      sbj.complete();
    });
    return sbj;
  }
  
}