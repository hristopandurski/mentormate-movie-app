import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { Results } from '../../shared/models/results.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mm-movie-list-details',
  templateUrl: './movie-list-details.component.html',
  styleUrls: ['./movie-list-details.component.scss']
})
export class MovieListDetailsComponent implements OnInit {

  public movieList$: Observable<{ name: string, items: Array<Movie> }>;

  constructor(private _movieService: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.movieList$ = this._movieService.getList(this._route.snapshot.params.id).share();
  }

}
