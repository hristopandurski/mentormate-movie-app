import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { TintDirective } from './directives/tint.directive';
import { ButtonComponent } from './components/button/button.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent
  ],
  exports: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent
  ]
})
export class SharedModule { }
