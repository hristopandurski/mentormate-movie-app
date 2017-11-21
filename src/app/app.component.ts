import { Component } from '@angular/core';
import { MovieService } from './core/movie.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public movies$: Observable<Array<any>>;
  public selectedMovie: any;

  constructor(private _movieService: MovieService) {
    this.movies$ = this._movieService.getMovies();
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }
}
