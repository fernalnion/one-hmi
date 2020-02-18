import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './components';

const AAPL_MODULES = [
  NgbModule
];
const AAPL_COMPONENTS = [
  ToolbarComponent
];
const AAPL_PIPES = [];

@NgModule({
  imports: [
    CommonModule,
    ...AAPL_MODULES
  ],
  exports: [
    CommonModule,
    ...AAPL_PIPES,
    ...AAPL_COMPONENTS
  ],
  declarations: [
    ...AAPL_COMPONENTS,
    ...AAPL_PIPES
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [],
    }
  }
}
