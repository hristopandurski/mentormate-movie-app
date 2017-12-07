import { slideFromRight } from './../../../shared/animations';
import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mm-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideFromRight()]
})
export class SearchItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() isSelected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
