import { Router } from '@angular/router';
import { Component, HostBinding, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'mm-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePosterComponent implements OnInit {
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() showMovieDetails: EventEmitter<any> = new EventEmitter();
  @Input() movie: Movie;
  @Input() isNotFlippable = false;
  @HostBinding('class.movie-poster--active') @Input() isSelected = false;

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
  }

}
