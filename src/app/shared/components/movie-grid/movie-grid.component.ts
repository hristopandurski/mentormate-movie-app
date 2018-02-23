import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models';
import { staggerAnimation } from '../../animations/index';

@Component({
  selector: 'mm-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [staggerAnimation(100, 250)]
})
export class MovieGridComponent implements OnInit {
  @Input() movies: Array<Movie>;
  @Input() isToggleable: boolean;
  @Input() isInToggleMode: boolean;
  @Input() selectedMovie: Movie;
  @Output() movieCollected: EventEmitter<Movie> = new EventEmitter();
  @Output() movieListToggled: EventEmitter<boolean> = new EventEmitter();
  toggleEditMode() {
    this.selectedMovie = null;
    this.movieListToggled.emit(!this.isInToggleMode);
  }
  selectMovie(movie: Movie) {
    if (this.isInToggleMode) {
      this.movieCollected.emit(movie);
    } else {
      this.selectedMovie = movie;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
