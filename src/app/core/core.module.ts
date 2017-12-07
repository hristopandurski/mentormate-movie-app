import { AuthInterceptor } from './http.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { MovieService } from './movie.service';
import { SharedModule } from '../shared/index';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';
import { AccountService } from './account.service';
import { accountLoader } from './account.loader';
import { SearchItemComponent } from './search/search-item/search-item.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    SvgDefinitionsComponent,
    ProxyRouteComponent,
    SearchItemComponent
  ],
  exports: [
    SvgDefinitionsComponent
  ],
  providers: [
    AuthService,
    MovieService,
    AccountService,
    {
      provide: APP_INITIALIZER,
      useFactory: accountLoader,
      deps: [AuthService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
