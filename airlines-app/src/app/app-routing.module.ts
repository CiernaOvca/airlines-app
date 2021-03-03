import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./airlines-module/airlines-overview.module').then(m => m.AirlinesOverviewModule) 
  },
  { 
    path: '**',
    loadChildren: () => import('./airlines-module/airlines-overview.module').then(m => m.AirlinesOverviewModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
