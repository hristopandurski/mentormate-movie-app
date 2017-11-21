import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';
import { TintDirective } from './directives/tint.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MoviePosterComponent,
    TintDirective
  ],
  exports: [
    MoviePosterComponent
  ]
})
export class SharedModule { }
