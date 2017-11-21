import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent
  ],
  providers: [MovieService]
})
export class CoreModule { }
