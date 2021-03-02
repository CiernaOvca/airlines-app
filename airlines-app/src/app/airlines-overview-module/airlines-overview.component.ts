import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DataProviderService } from '../services/data-provider.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AirlineDetailDialogComponent } from './airline-detail-dialog/airline-detail-dialog.component';

export interface Airline {
  name: string;
  year: number;
  contact: {
      number: string,
      email: string,
  };
  logo: string;
}

@Component({
    selector: 'airlines-overview-component',
    templateUrl: './airlines-overview.component.html',
})
export class AirlinesOverviewComponent implements OnInit {
  public items: MenuItem[];

  // table settings
  public airlinesData: any;
  public columns: any;
  public tableLoading: boolean = false;
  public totalRecords: number;
  public first: number = 0;
  public showFavorites: boolean = false;

  // general
  public title = 'Airlines overview';
  private favorites: any[] = [];
  private ref: DynamicDialogRef;

  constructor(
    private dataProviderService: DataProviderService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
    ]

    this.columns = [
      { header: 'Logo', field: 'logoSrc', width: '10%' },
      { header: 'Name', field: 'defaultName', width: '50%' },
      { field: 'code', display: 'none' },
      { header: 'Code', field: 'code' } // tmp
    ];
  }

  loadData($event: any) {
    console.log('event', $event);
    this.tableLoading = true;
    this.dataProviderService.getAirlinesOverviewData().subscribe((result) => {
      const data = result.map((item) => {
        return {
          ...item,
          logoSrc: `https://www.kayak.com/${item.logoURL}`,
        }
      });

      this.airlinesData = data.slice($event.first, $event.first + $event.rows);
      this.totalRecords = data.length;
      this.tableLoading = false;
    });
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  addToFavorites(code: string) {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));

    if (this.favorites === null) this.favorites = [];
    this.favorites.push(code);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  showFavoriteAirlines($event: any) {
    console.log('showFavoriteAirlines', $event);
    if ($event.checked) {
      this.airlinesData = this.airlinesData.filter(x => this.favorites.includes(x.code));
      this.totalRecords = this.airlinesData.length;

      this.title = 'Favorite airlines overview';
    }
    else {
      this.loadData({first: 0, rows: 10});
      this.title = 'Airlines overview';
    }
  }
}
