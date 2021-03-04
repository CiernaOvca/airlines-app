import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airlines-app';

  public items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '' },
  ];
}
