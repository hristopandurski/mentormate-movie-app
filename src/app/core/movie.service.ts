import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { MOVIES } from '../mocks';
import { Movie, IMovieInput, Results } from '../shared/models';

@Injectable()
export class MovieService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getMovieById(id: number): Observable<Movie> {
    return this._http.get<IMovieInput>(`movie/${id}`)
      .map(m => new Movie(m));
  }

  getNowPlayingMovies(): Observable<Results<Movie>> {
    return this._http.get<Results<IMovieInput>>(`movie/now_playing?language=en-US`)
      .map(res => ({ ...res, results: res.results.map(m => new Movie(m)) }));
  }

  getFavoritedMovies(): Observable<Results<Movie>> {
    return this._http
      .get<Results<IMovieInput>>(`account/${this._authService.currentAccount$.getValue().id}/favorite/movies?language=en-US`)
      .map(res => ({ ...res, results: res.results.map(m => new Movie(m)) }));
  }

}
