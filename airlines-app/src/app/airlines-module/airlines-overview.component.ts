import { Component } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

import { AirlineDetailDialogComponent } from './airline-detail-dialog/airline-detail-dialog.component';
import { DataProviderService } from '../services/data-provider.service';
import { Airline } from '../Model/Airline';

@Component({
    selector: 'airlines-overview-component',
    templateUrl: './airlines-overview.component.html',
})
export class AirlinesOverviewComponent {
  public items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'airlines' },
  ];

  // table settings
  public airlinesData: Airline[];
  public tableLoading: boolean = false;
  public totalRecords: number;
  public first: number = 0;
  public showFavorites: boolean = false;
  public columns: any[] =  [
    { header: 'Logo', field: 'logoSrc', width: '10%' },
    { header: 'Name', field: 'defaultName', width: '50%' },
    { field: 'code', display: 'none' },
  ];

  // general
  public title = 'Airlines overview';
  private favorites: string[] = [];
  private dialogRef: DynamicDialogRef;

  constructor(
    private dataProviderService: DataProviderService,
    private dialogService: DialogService,
  ) { }

  loadData($event: {first: number, rows: number}) {
    console.log('event', $event);
    this.tableLoading = true;
    this.dataProviderService.getAirlinesOverviewData().subscribe((overviewData: Airline[]) => {
      this.airlinesData = overviewData.slice($event.first, $event.first + $event.rows);
      this.totalRecords = overviewData.length;
      this.tableLoading = false;
    });

    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  addToFavorites(code: string) {
    this.favorites = JSON.parse(localStorage.getItem('favorites'));

    if (this.favorites === null) 
      this.favorites = [];

    this.favorites.push(code);

    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  showFavoriteAirlines($event: any) {
    if ($event.checked) {
      this.airlinesData = this.airlinesData.filter((airline: Airline) => this.favorites.includes(airline.code));
      this.totalRecords = this.airlinesData.length;

      this.title = 'Favorite airlines overview';
    }
    else {
      this.loadData({first: 0, rows: 10});

      this.title = 'Airlines overview';
    }
  }

  showAirlineDetail(code: string) {
    const airline = this.airlinesData.filter((airline: Airline) => airline.code === code)[0];
    this.dialogRef = this.dialogService.open(AirlineDetailDialogComponent, {
      header: airline.defaultName,
      width: '550px',
      data: code,
    });
  }
}
