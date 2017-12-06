import { Router } from '@angular/router';
import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() showMovieDetails: EventEmitter<any> = new EventEmitter();
  @Input() movie: Movie;
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;
  moviesUrl: String;

  clickMoviePoster(event: Event, movie, doNotPropagate?: boolean) {
    if (doNotPropagate) {
      event.stopPropagation();
    }
    this.selectMovie.emit(movie);
  }
  clickMovieDetails($event, movie: Movie) {
    $event.stopPropagation();
    this._router.navigate([{ outlets: { sidebar: `details/${movie.id}` } }]);
    this.showMovieDetails.emit(movie);
  }
  constructor(private _router: Router) { }

  ngOnInit() {
    this.moviesUrl = environment.THEMOVIE_DB_API_IMG;
  }

}
