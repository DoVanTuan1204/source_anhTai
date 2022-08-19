import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DxFormModule } from "devextreme-angular/ui/form";
import { DxLoadIndicatorModule } from "devextreme-angular/ui/load-indicator";
import notify from "devextreme/ui/notify";
import { AppConfig } from "src/app/app.config";
import { Parameter } from "../../model/request.model";
import { AuthService } from "../../services";
import { DefaultService } from "../../services/default.service";
import { LocalStoreService } from "../../services/local-store.service";
import { NotificationSwalService } from "../../services/notification-swal.service";
import { LoginFormService } from "./login-form.service";
import { HttpHeaders } from "@angular/common/http";
import { RequestService } from "../../services/request.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  loading = false;
  formData: any = {
    email: "",
    password: "",
  };

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _loginForm: LoginFormService,
    private _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService,
    private _default: DefaultService,
    private _keyBeare: RequestService,
    private _localStorage: LocalStoreService
  ) {}

  async onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
    let params: any = {
      email,
      password,
    };
    await this._loginForm
      .logIn(params)
      .then((res: any) => {
        if (res) {
          console.log(res.data.token); //token bearer
          this._keyBeare.TokenBeare = res.data.token;
          this._localStorage.LOCAL_STORAGE_KEY = res.data.token;

          this._notiSwal.notificationSwalToast("Login Success", "", "success");
          this._ls.setLocalItem("email", email);
          this._ls.setLocalItem("Password", password);
          this._ls.setLocalItem("token", res.data.token);
          this._auth._user = {
            user: email,
            avatarUrl:
              "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
          };
          this._router.navigate(["/SalesOrder"]);
          this.loading = false;
        } else {
          this._notiSwal.notificationSwal(
            "Login",
            "Incorrect User or Password",
            "error"
          );
          this.loading = false;
        }
      })
      .catch((err: HttpErrorResponse) => {
        this._notiSwal.notificationSwal("Login", "Login Error", "error");
        this.loading = false;
      });
  }

  onCreateAccountClick = () => {
    this._router.navigate(["/create-account"]);
  };
}
@NgModule({
  imports: [CommonModule, RouterModule, DxFormModule, DxLoadIndicatorModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
