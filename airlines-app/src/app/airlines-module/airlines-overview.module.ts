import { NgModule } from '@angular/core';

import { AirlinesOverviewRoutingModule } from './airlines-overview-routing.module';
import { AirlinesOverviewComponent } from './airlines-overview.component';
import { AirlineDetailDialogComponent } from './airline-detail-dialog/airline-detail-dialog.component';

import { DataProviderService } from '../services/data-provider.service';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AirlinesOverviewComponent,
    AirlineDetailDialogComponent,
  ],
  imports: [
    CommonModule,
    
    AirlinesOverviewRoutingModule,

    SharedModule,
  ],
  providers: [ DataProviderService ]
})
export class AirlinesOverviewModule { }
