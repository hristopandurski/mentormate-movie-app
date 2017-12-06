import { MovieService } from './../core/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { environment } from '../../environments/environment';

@Component({
  selector: 'mm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  movie$: any;
  moviesUrl: String;
  loading = true;
  @ViewChild('movieCover') _movieCover: ElementRef;
  @HostListener('document:keydown', ['$event']) closeOnEscape(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.closeSelf();
    }
  }

  closeSelf() {
    this._router.navigate([{ outlets: { sidebar: null } }]);
  }

  constructor(private _route: ActivatedRoute, private _router: Router, private _movieService: MovieService) {
  }

  morphBackground(colors: any) {
    this._movieCover.nativeElement.style.background = `linear-gradient(to bottom right, ${colors.DarkVibrant} 65%, ${colors.Vibrant})`;
  }

  ngOnInit() {
    this.movie$ = this._route.params
      .do(_ => this.loading = true)
      .switchMap(params =>
        this._movieService.getMovieById(+params['id'])
          .do(_ => this.loading = false)
      );

    this.moviesUrl = environment.THEMOVIE_DB_API_IMG;
  }


}
