import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirlinesOverviewRoutingModule } from './airlines-overview-routing.module';
import { AirlinesOverviewComponent } from './airlines-overview.component';
import { AirlineDetailDialogComponent } from './airline-detail-dialog/airline-detail-dialog.component';

import { DataProviderService } from '../services/data-provider.service';

// primeng services 
import { DialogService } from 'primeng/dynamicdialog';

// primeng components
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    AirlinesOverviewComponent,
    AirlineDetailDialogComponent,
  ],
  imports: [
    CommonModule,
    AirlinesOverviewRoutingModule,

    InputSwitchModule,
    InputTextModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ChipModule,
    CardModule,
  ],
  providers: [ DataProviderService, DialogService ]
})
export class AirlinesOverviewModule { }
