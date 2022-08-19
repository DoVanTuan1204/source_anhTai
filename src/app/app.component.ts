import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { LocalStoreService } from './shared/services/local-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
    private _auth: AuthService, 
    private screen: ScreenService, 
    public appInfo: AppInfoService,
    private _ls: LocalStoreService,
    private _router: Router,
  ) { }

  ngOnInit() {
    if (!this._ls.getLocalItem("UserId")) {
      this._auth.logOut();
    } else {
      const pathName = window.location.pathname;
      if(pathName === '/') {
        this._router.navigate(['/SalesOrder']);
      }
      if(pathName === '/login-form') {
        this._router.navigate(['/SalesOrder']);
      }
    }
  }

  isAuthenticated() {
    return this._auth.loggedIn;
  }
  
}
