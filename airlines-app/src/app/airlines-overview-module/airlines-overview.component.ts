import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataProviderService } from '../data-provider.service';

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
  private rows: number = 10;

  constructor(
    private dataProviderService: DataProviderService,
  ) { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
    ]

    this.columns = [
      { label: 'Name', field: 'defaultName' },
      { label: 'Year', field: 'year' },
      // { label: 'Logo', field: 'logoURL' },
      { label: 'Code', field: 'code' },
    ];
  }

  loadData($event: any) {
    console.log('event', $event);
    this.tableLoading = true;
    this.dataProviderService.getAirlinesOverviewData().subscribe((result) => {
      console.log(result);
      this.tableLoading = false;

      this.airlinesData = result.slice($event.first, $event.first + $event.rows);

      this.totalRecords = result.length;
    });

    console.log('data', this.airlinesData);
  }
}
