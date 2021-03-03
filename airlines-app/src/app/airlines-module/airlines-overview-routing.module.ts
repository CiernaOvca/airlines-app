import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesOverviewComponent } from './airlines-overview.component';

const routes: Routes = [
  { 
    path: '', 
    component: AirlinesOverviewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirlinesOverviewRoutingModule { }
