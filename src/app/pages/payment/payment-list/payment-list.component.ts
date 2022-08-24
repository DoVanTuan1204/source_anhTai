import { Component, OnInit } from "@angular/core";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { PaymentService } from "../payment.service";
@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"],
})
export class PaymentListComponent implements OnInit {
  constructor(
    private _getExpense: PaymentService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService
  ) {}
  public dataExpense: any;
  public itemExpense: any;
  selectedItemKeys: any[] = [];
  fetchData() {
    this._getExpense.getExpense().then((res_expense) => {
      res_expense.data.forEach((item) => {
        this.itemExpense = item;
      });
      this.dataExpense = res_expense.data;
    });
    console.log(this.dataExpense);
  }
  ngOnInit(): void {
    this.fetchData();
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  async deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getExpense.deletePayment(key._id);
    });
    this.fetchData();
    this.fetchData();

    if (this._ls.LOCAL_STORAGE_KEY !== "") {
      this._notiSwal.notificationSwalToast(
        "Delete Customer Success",
        "",
        "success"
      );
    }
  }
}
