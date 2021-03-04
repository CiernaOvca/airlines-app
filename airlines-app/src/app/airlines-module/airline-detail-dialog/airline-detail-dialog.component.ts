import { Component, OnInit } from '@angular/core';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DataProviderService } from 'src/app/services/data-provider.service';
import { Airline } from '../models/Airline';

@Component({
  templateUrl: './airline-detail-dialog.component.html',
  selector: 'airline-detail-dialog',
})
export class AirlineDetailDialogComponent implements OnInit {
  // card
  public airlineData: Airline = {
    defaultName: '',
    code: '',
    contact: {
      phone: '',
      siteUrl: '',
    },
    logoSrc: ''
  };

  // button
  public isButtonDisabled: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private dataProvider: DataProviderService,
  ) {

  }

  ngOnInit() {
    this.dataProvider.getAirlineDetail(this.config.data).subscribe((result): Airline => {
      this.airlineData = result;
      return result; 
    }, (err) => {
      this.isButtonDisabled = true;
      this.ref.close('err');
    });
  }

  visitPage() {
    window.open(this.airlineData.contact.siteUrl);
  }

}
