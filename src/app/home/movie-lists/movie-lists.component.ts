import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/movie.service';
import { Movie, Results } from '../../shared/models/index';
import { Observable } from 'rxjs/Observable';
import { MovieList } from '../../shared/models/movie-list.model';

@Component({
  selector: 'mm-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.scss']
})
export class MovieListsComponent implements OnInit {

  public movieLists$: Observable<Results<MovieList>>;
  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.movieLists$ = this._movieService.getMovieLists();
  }

}
