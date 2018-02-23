import { AuthInterceptor } from './http.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule, APP_INITIALIZER, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { MovieService } from './movie.service';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProxyRouteComponent } from './proxy-route/proxy-route.component';
import { AccountService } from './account.service';
import { accountLoader } from './account.loader';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    SvgDefinitionsComponent,
    ProxyRouteComponent
  ],
  exports: [
    SvgDefinitionsComponent
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
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
    };
  }
}

