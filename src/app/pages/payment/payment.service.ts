import { Injectable } from "@angular/core";
import { RequestService } from "src/app/shared/services/request.service";
import { firstValueFrom } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class PaymentService {
  public path_Expense = "/expense";
  constructor(private _reqService: RequestService) {}
  getExpense(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_Expense));
  }
}
