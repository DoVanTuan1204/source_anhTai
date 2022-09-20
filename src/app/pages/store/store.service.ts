import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Parameter } from "src/app/shared/model/request.model";
import { RequestService } from "src/app/shared/services/request.service";
@Injectable({
  providedIn: "root",
})
export class StoreService {
  public path_User = "/user";
  constructor(private _reqService: RequestService) {}
  getUser(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_User));
  }
  deleteUser(id: Parameter[]): Promise<any> {
    return firstValueFrom(this._reqService.deleteRecord(this.path_User, id));
  }
  createUser(params: Parameter[]): Promise<any> {
    return firstValueFrom(
      this._reqService.createRecord(this.path_User, params)
    );
  }
  getUserByID(id: any): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_User + "/" + id));
  }
}
