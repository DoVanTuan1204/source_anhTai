import { Injectable } from "@angular/core";
import { RequestService } from "src/app/shared/services/request.service";
import { firstValueFrom } from "rxjs";
import { Parameter } from "src/app/shared/model/request.model";
import { promises } from "dns";
@Injectable({
  providedIn: "root",
})
export class PaymentService {
  public path_Expense = "/expense";
  constructor(private _reqService: RequestService) {}
  getExpense(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_Expense));
  }
  createPayment(params: Parameter[]): Promise<any> {
    return firstValueFrom(
      this._reqService.createRecord(this.path_Expense, params)
    );
  }
  deletePayment(id: Parameter[]): Promise<any> {
    return firstValueFrom(this._reqService.deleteRecord(this.path_Expense, id));
  }
}
