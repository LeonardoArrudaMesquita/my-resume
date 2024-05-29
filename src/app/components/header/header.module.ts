import { NgModule } from '@angular/core';

import { BadgeComponent } from '../badge/badge.component';
import { MainTitleComponent } from '../main-title/main-title.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeComponent,
    MainTitleComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
