import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { TintDirective } from './directives/tint.directive';
import { ButtonComponent } from './components/button/button.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FabComponent } from './components/fab/fab.component';
import { LimitedCharacterTextareaComponent } from './components/limited-character-textarea/limited-character-textarea.component';
import { AddToListFormComponent } from './components/add-to-list-form/add-to-list-form.component';
import { MaxCharacterCountValidator } from './directives/max-character-count.directive';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent,
    FabComponent,
    LimitedCharacterTextareaComponent,
    AddToListFormComponent,
    MaxCharacterCountValidator,
    MovieGridComponent,
    MovieListComponent
  ],
  exports: [
    IconComponent,
    MoviePosterComponent,
    TintDirective,
    ButtonComponent,
    AutoFocusDirective,
    SpinnerComponent,
    FabComponent,
    LimitedCharacterTextareaComponent,
    AddToListFormComponent,
    MovieGridComponent,
    MovieListComponent
  ]
})
export class SharedModule { }
