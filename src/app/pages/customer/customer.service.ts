import { Injectable } from "@angular/core";
import { RequestService } from "src/app/shared/services/request.service";
import { firstValueFrom } from "rxjs";
import { Parameter } from "src/app/shared/model/request.model";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  public path_Customer = "/customer";
  constructor(private _reqService: RequestService) {}
  getCustomer(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_Customer));
  }
  createCustomer(params: Parameter[]): Promise<any> {
    return firstValueFrom(
      this._reqService.createRecord(this.path_Customer, params)
    );
  }
}
