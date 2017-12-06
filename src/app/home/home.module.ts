import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../core/header/header.component';
import { SearchComponent } from '../core/search/search.component';
import { SharedModule } from '../shared/index';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent
  ]
})
export class HomeModule { }
