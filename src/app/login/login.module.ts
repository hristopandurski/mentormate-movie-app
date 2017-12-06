import { AnonymousGuard } from './../core/anonymous.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AnonymousGuard
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
