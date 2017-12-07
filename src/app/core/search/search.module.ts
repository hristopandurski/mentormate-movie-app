import { SharedModule } from '../../shared';
import { SearchService } from './search.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item/search-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SearchComponent, SearchItemComponent],
  exports: [SearchComponent]
})
export class SearchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SearchModule,
      providers: [
        SearchService
      ]
    };
  }
}
