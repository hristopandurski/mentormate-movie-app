import { Movie, Results, Account } from '../shared/models';
import { AuthService } from './../core/auth.service';
import { AccountService } from './../core/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieService } from '../core/movie.service';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies$: Observable<Results<Movie>>;
  public account$: Observable<Account>;
  public selectedMovie: Movie;
  public movieDetails: Movie;

  constructor(private _movieService: MovieService, private _authService: AuthService) { }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  ngOnInit() {
    this.account$ = this._authService.currentAccount$;
    this.movies$ = this._movieService.getNowPlayingMovies();
  }

}
