import { NgModule } from '@angular/core';
import { MiscellaneousComponent } from './miscellaneous.component';
import { MiscellaneousRoutingModule } from './miscellaneous.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemeModule } from 'src/app/@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    MiscellaneousRoutingModule
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent
  ]
})
export class MiscellaneousModule { }
