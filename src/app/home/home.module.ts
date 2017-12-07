import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../core/header/header.component';
import { SearchComponent } from '../core/search/search.component';
import { SharedModule } from '../shared/index';
import { AuthGuard } from '../core/auth.guard';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { MovieListsComponent } from './movie-lists/movie-lists.component';
import { MovieListDetailsComponent } from './movie-list-details/movie-list-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    NowPlayingComponent,
    MovieListsComponent,
    MovieListDetailsComponent,
    FavoritesComponent
  ]
})
export class HomeModule { }
