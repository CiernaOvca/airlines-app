import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services 
import { DialogService } from 'primeng/dynamicdialog';
import { DataProviderService } from '../services/data-provider.service';

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
  declarations: [],
  imports: [
    InputSwitchModule,
    InputTextModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ChipModule,
    CardModule,
  ],
  providers: [ 
    DialogService,
    DataProviderService
  ],
  exports: [
    InputSwitchModule,
    InputTextModule,
    FieldsetModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ChipModule,
    CardModule,
  ]
  })
  export class SharedModule { }