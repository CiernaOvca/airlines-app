import { Component } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AirlineDetailDialogComponent } from './airline-detail-dialog/airline-detail-dialog.component';
import { DataProviderService } from '../services/data-provider.service';
import { Airline } from '../airlines-module/models/Airline';

@Component({
    selector: 'airlines-overview-component',
    templateUrl: './airlines-overview.component.html',
})
export class AirlinesOverviewComponent {

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

    // if the airline is already in favorites, remove it
    if (this.favorites.includes(code)) {
      this.favorites = this.favorites.filter((favorite: string) => favorite !== code);
    }
    // else add the airline to favorites
    else {
      this.favorites.push(code);
    }
    
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  filterFavoriteData($event: any) {
    if ($event.checked) {
      this.dataProviderService.getFavoriteAirlines(this.favorites).subscribe((result) => {
        this.airlinesData = result;
        this.totalRecords = this.airlinesData.length;

        this.title = 'Favorite airlines overview';
      })
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
