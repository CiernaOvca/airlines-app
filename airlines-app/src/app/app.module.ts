import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesOverviewComponent } from './airlines-overview-module/airlines-overview.component';
import { DataProviderService } from './services/data-provider.service';
import { AirlineDetailDialogComponent } from './airlines-overview-module/airline-detail-dialog/airline-detail-dialog.component';

// primeng services 
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

// primeng components
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AirlinesOverviewComponent,
    AirlineDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    BrowserAnimationsModule,
    
    InputSwitchModule,
    InputTextModule,
    FieldsetModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    TableModule,
    ChipModule,
    CardModule,
  ],
  providers: [ DataProviderService, DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
