import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Parameter } from "../../model/request.model";
import { RequestService } from "../../services/request.service";
import { promises } from "dns";
@Injectable({
  providedIn: "root",
})
export class LoginFormService {
  public path = "/user/login";
  constructor(private _request: RequestService) {}

  logIn(params: Parameter[]): Promise<any> {
    return firstValueFrom(this._request.login(this.path, params));
  }

  // logIn(params: Parameter[]) {
  //   return this._request.login(this.path, params).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
