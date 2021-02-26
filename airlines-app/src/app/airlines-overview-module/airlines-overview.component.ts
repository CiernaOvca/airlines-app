import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataProviderService } from '../services/data-provider.service';

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

  private favorites: any[] = [];

  constructor(
    private dataProviderService: DataProviderService,
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

  loadData($event: any, favorites?: boolean) {
    console.log('event', $event);
    this.tableLoading = true;
    this.dataProviderService.getAirlinesOverviewData().subscribe((result) => {
      const data = result.map((item) => {
        return {
          ...item,
          logoSrc: `https://www.kayak.com/${item.logoURL}`,
        }
      })

      console.log(data.slice(0, 100));

      this.airlinesData = data.slice($event.first, $event.first + $event.rows);
      this.totalRecords = data.length;
      this.tableLoading = false;
    });
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
  }

  addToFavorites(code: string) {
    console.log('favorites before', JSON.parse(localStorage.getItem('favorites')));
    this.favorites = JSON.parse(localStorage.getItem('favorites'));
    if (this.favorites === null) this.favorites = [];
    this.favorites.push(code);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    console.log('favorites now', JSON.parse(localStorage.getItem('favorites')));
    //localStorage.removeItem('favorites');
  }

  showFavoriteAirlines($event: any) {
    if ($event.checked) {
      this.filterAirlinesData(true);
    }
    else {
      console.log('show all');
    }
  }

  filterAirlinesData(favorites?: boolean) {
    if (favorites) {
      this.airlinesData = this.airlinesData.filter(x => this.favorites.includes(x.code));
    }
    else {
    }
  }
}
