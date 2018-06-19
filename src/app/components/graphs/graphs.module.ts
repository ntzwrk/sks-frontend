import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import highstock from 'highcharts/modules/stock.src';

import { GraphsComponent } from './graphs.component';
import { KeyDevelopmentComponent } from './key-development/key-development.component';
import { KeyFluctuationComponent } from './key-fluctuation/key-fluctuation.component';


export function highchartsModules() {
  return [ highstock ];
}

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    ChartModule
  ],
  declarations: [
    GraphsComponent,
    KeyDevelopmentComponent,
    KeyFluctuationComponent
  ],
  exports: [ GraphsComponent ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }
  ]
})
export class GraphsModule { }
