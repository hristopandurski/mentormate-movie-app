import { staggerAnimation } from './../../shared/animations';
import { Router } from '@angular/router';
import { Key } from './../../shared/enums/key.enum';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Movie } from './../../shared/models';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/shareReplay';
import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [staggerAnimation(150, 450)]
})
export class SearchComponent implements OnInit {

  @ViewChild('input') searchInput: ElementRef;
  movies$: Observable<Array<Movie>>;
  searching$: Subject<boolean> = new Subject();
  resultsShown$: Subject<boolean> = new Subject();
  selectedItemIndex$: Observable<number>;
  private _selectedItemIndex = -1;
  private _movies: Array<Movie>;

  @HostListener('keydown', ['$event'])
  handleEsc(event: KeyboardEvent) {
    if (event.keyCode === Key.Escape) {
      this.hideResults();
    }
  }

  constructor(private _searchService: SearchService, private _router: Router) { }
  selectItem(itemIndex: number) {
    this._router.navigate([{ outlets: { sidebar: `details/${this._movies[itemIndex].id}` } }]);
    this.hideResults();
  }
  showResults() {
    this.resultsShown$.next(true);
  }
  hideResults() {
    this.resultsShown$.next(false);
  }
  ngOnInit() {
    this.selectedItemIndex$ =
      Observable.fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keydown')
        .map(event => event.keyCode)
        .filter(keyCode => [Key.ArrowUp, Key.ArrowDown, Key.Enter].indexOf(keyCode) !== -1)
        .map(kc => this._navigate(kc))
        .startWith(-1)
        .share();

    this.movies$ = Observable.fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'input')
      .map(event => (event.target as HTMLInputElement).value)
      .debounceTime(200)
      .distinctUntilChanged()
      .filter(query => {
        this._selectedItemIndex = -1;
        if (query.length > 2) {
          return true;
        } else {
          this.hideResults();
          return false;
        }
      })
      .switchMap(query => {
        this.searching$.next(true);
        return this._searchService.search(query);
      })
      .do(results => {
        this._movies = results;
        this.resultsShown$.next(true);
        this.searching$.next(false);
      })
      .shareReplay();
  }
  private _navigate(keyCode: Key): number {
    switch (keyCode) {
      case Key.ArrowUp:
        if (this._selectedItemIndex - 1 !== -2) {
          this._selectedItemIndex--;
        }
        break;
      case Key.ArrowDown:
        if (this._selectedItemIndex + 1 !== this._movies.length) {
          this._selectedItemIndex++;
        }
        break;
      case Key.Enter:
        if (this._selectedItemIndex !== -1) {
          this.selectItem(this._selectedItemIndex);
        }
        break;
    }
    return this._selectedItemIndex;
  }
}
