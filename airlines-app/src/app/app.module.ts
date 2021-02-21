import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesOverviewComponent } from './airlines-overview-module/airlines-overview.component';
import { DataProviderService } from './data-provider.service';

// primeng components
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';

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
    MenubarModule,
    ButtonModule,
    TableModule,
  ],
  providers: [DataProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
