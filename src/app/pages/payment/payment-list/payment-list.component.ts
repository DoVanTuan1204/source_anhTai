import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../payment.service";
@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"],
})
export class PaymentListComponent implements OnInit {
  constructor(private _getExpense: PaymentService) {}
  public dataExpense: any;
  public itemExpense: any;
  ngOnInit(): void {
    this._getExpense.getExpense().then((res_expense) => {
      res_expense.data.forEach((item) => {
        this.itemExpense = item;
        console.log(this.itemExpense);
      });

      this.dataExpense = res_expense;
    });
  }
}
