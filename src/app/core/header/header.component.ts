import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { popIn } from '../../shared/animations';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [popIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() isCollecting: boolean;
  @Input() collectables: Array<any>;
  @Output() collectablesSelectionComplete: EventEmitter<Array<any>> = new EventEmitter();
  constructor() { }
  completeSelection() {
    this.collectablesSelectionComplete.emit(this.collectables);
  }
  ngOnInit() {
  }

}
