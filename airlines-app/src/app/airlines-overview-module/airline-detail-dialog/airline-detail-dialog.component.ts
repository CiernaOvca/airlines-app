import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  templateUrl: './airline-detail-dialog.component.html',
  selector: 'airline-detail-dialog',
})
export class AirlineDetailDialogComponent implements OnInit {
  // card
  public airlineData: any = {};

  // button
  public isButtonDisabled: boolean = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private dataProvider: DataProviderService,
  ) {

  }

  ngOnInit() {
    this.dataProvider.getAirlineDetail(this.config.data).subscribe((result) => {
      this.airlineData = {
        ...result,
        logoSrc: `https://www.kayak.com${result.logoURL}`,
      }
    }, (err) => {
      this.isButtonDisabled = true;
      this.ref.close('err');
    });
  }

  visitPage($event: any) {
    window.open(this.airlineData.site);
  }

}
