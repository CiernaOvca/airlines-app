import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesOverviewComponent } from './airlines-overview-module/airlines-overview.component';
import { DataProviderService } from './services/data-provider.service';

// primeng components
import { InputSwitchModule } from 'primeng/inputswitch'
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    AppComponent,
    AirlinesOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    InputSwitchModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    ChipModule,
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
