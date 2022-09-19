import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { AppConfig } from "src/app/app.config";
import { Parameter } from "../model/request.model";
import { LocalStoreService } from "./local-store.service";
import { RequestService } from "./request.service";

const defaultPath = "/";

const defaultUser = {
  user: "",
  avatarUrl:
    "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
};

@Injectable()
export class AuthService {
  public _user = defaultUser;
  get loggedIn(): boolean {
    return !!this._user;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(
    private router: Router,
    private _http: HttpClient,
    private _ls: LocalStoreService,
    private _req: RequestService
  ) {}

  async logIn(user: string, password: string) {
    try {
      // Send request
      this._user = { ...defaultUser, user };
      this.router.navigate([this._lastAuthenticatedPath]);

      return {
        isOk: true,
        data: this._user,
      };
    } catch {
      return {
        isOk: false,
        message: "Login failed",
      };
    }
  }

  async getUser() {
    try {
      // Send request
      if (this._ls.getLocalItem("email")) {
        this._user = {
          user: this._ls.getLocalItem("email"),
          avatarUrl:
            "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        };
      }
      return {
        isOk: true,
        data: this._user,
      };
    } catch {
      return {
        isOk: false,
      };
    }
  }

  async createAccount(params: Parameter[]) {
    try {
      // Send request

      const createAccountPath = "/user";

      firstValueFrom(this._req.createRecord(createAccountPath, params));
      this.router.navigate(["/create-account"]);
      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to create account",
      };
    }
  }

  async changePassword(email: string, recoveryCode: string) {
    try {
      // Send request

      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to change password",
      };
    }
  }

  async resetPassword(email: string) {
    try {
      // Send request

      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to reset password",
      };
    }
  }

  async logOut() {
    this._user = null;
    this.router.navigate(["/login-form"]);
    this._ls.clearLocal();
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      "login-form",
      "reset-password",
      "create-account",
      "change-password/:recoveryCode",
    ].includes(route.routeConfig.path);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(["/login-form"]);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig.path;
    }

    return isLoggedIn || isAuthForm;
  }
}
