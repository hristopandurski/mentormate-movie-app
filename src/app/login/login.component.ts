import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loading = false;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    const request_token = this._route.snapshot.queryParams['request_token'];
    if (request_token &&  !this._route.snapshot.queryParams['denied']) {
      this.loading = true;
      this._authService.getSession(request_token)
        .subscribe(_ => {
          this._router.navigate(['/']);
        });
    } else {
      throw new Error('No token or request denied.');
    }
  }

  login() {
    this.loading = true;
    this._authService.getRequestToken().subscribe();
  }

}
