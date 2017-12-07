import { AuthGuard } from '../core/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NowPlayingComponent } from 'app/home/now-playing/now-playing.component';
import { FavoritesComponent } from 'app/home/favorites/favorites.component';
import { MovieListsComponent } from 'app/home/movie-lists/movie-lists.component';
import { MovieListDetailsComponent } from 'app/home/movie-list-details/movie-list-details.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    canActivate: [
        AuthGuard
    ],
    children: [
        {
            path: 'now-playing',
            component: NowPlayingComponent
        },
        {
            path: 'favorites',
            component: FavoritesComponent
        },
        {
            path: 'lists',
            component: MovieListsComponent
        },
        {
            path: 'lists/:id',
            component: MovieListDetailsComponent
        },
        {
            path: '',
            redirectTo: '/now-playing',
        }

    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
