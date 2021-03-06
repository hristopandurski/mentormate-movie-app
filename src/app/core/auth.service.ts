import { Account } from './../shared/models/account.model';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AccountService } from './account.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AuthService {
  public currentAccount$ = new BehaviorSubject<Account>(null);
  constructor(private _http: HttpClient, private _accountService: AccountService) {
  }

  getRequestToken() {
    return this._http.get<{ request_token: string }>(`authentication/token/new`)
      .do((response: any) => {
        const token = response.request_token;
        const redirectTo = `http://${location.host}/login`;
        location.href = `${environment.THEMOVIE_DB_BASE_URL}/authenticate/${token}?redirect_to=${redirectTo}`;
      });
  }

  getSession(request_token: string) {
    let params = new HttpParams();
    params = params.set('request_token', request_token);
    return this._http.get<{ session_id: string }>(`authentication/session/new`, { params })
      .mergeMap(response => {
        localStorage.setItem('session_id', response.session_id);
        return this.getAccountAsync();
      });
  }
  getAccountAsync() {
    return this._accountService.getAccount()
      .map(account => {
        this.currentAccount$.next(account);
      });
  }
  logout() {
    localStorage.removeItem('session_id');
    this.currentAccount$.next(null);
  }


}
