import { SharedModule } from '../shared/index';
import { ColorExtractorDirective } from './../shared/directives/color-extractor.directive';
import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ],
  declarations: [
    DetailsComponent,
    ColorExtractorDirective
  ],
  exports: [
    ColorExtractorDirective
  ]
})
export class DetailsModule { }
