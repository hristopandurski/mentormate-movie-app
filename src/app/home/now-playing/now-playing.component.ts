import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { Results } from '../../shared/models/results.model';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '../../core/movie.service';

@Component({
  selector: 'mm-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingComponent implements OnInit {
  public movies$: Observable<Results<Movie>>;
  public isCollectingMovies$: Observable<boolean> = this._movieService.isCollectingMovies$;

  constructor(private _movieService: MovieService) { }

  toggleMovieList(isCollectingMovies: boolean) {
    this._movieService.collectedMovies$.next([]);
    this._movieService.isCollectingMovies$.next(isCollectingMovies);
  }

  collectMovie(movie) {
    this._movieService.collectMovie(movie);
  }

  ngOnInit() {
    this.movies$ = this._movieService.getNowPlayingMovies();
  }
}
