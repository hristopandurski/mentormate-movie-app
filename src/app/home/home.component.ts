import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Movie, Results, Account } from '../shared/models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICreateList } from '../shared/interfaces';
import { MovieService } from '../core/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public collectedMovies$: BehaviorSubject<Array<Movie>> = this._movieService.collectedMovies$;
  public isCollectingMovies$: BehaviorSubject<boolean> = this._movieService.isCollectingMovies$;
  public isCreateListFormShown = false;

  constructor(private _movieService: MovieService, private _router: Router) { }

  showCreateListForm() {
    this.isCreateListFormShown = true;
  }
  closeCreateListForm() {
    this.isCreateListFormShown = false;
  }

  addMoviesToList(createListModel: ICreateList) {
    this._movieService.createMovieList(createListModel, this.collectedMovies$.getValue())
      .subscribe(list_id => {
        this.collectedMovies$.next([]);
        this.isCollectingMovies$.next(false);
        this.isCreateListFormShown = false;
        this._router.navigate(['/lists', list_id]);
      });
  }
}
