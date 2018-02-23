import { Observable } from 'rxjs/Observable';
import { IAccountInput, Account } from './../shared/models/account.model';
import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  constructor(public http: HttpClient) { }

  public getAccount(): Observable<Account> {
    let params = new HttpParams();
    params = params.set('api_key', environment.THEMOVIE_DB_API_KEY);
    params = params.set('session_id', localStorage.getItem('session_id'));
    return this.http.get<IAccountInput>(`account`, { params }).map(res => new Account(res));
  }
}
