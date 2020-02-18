import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages.routing';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
