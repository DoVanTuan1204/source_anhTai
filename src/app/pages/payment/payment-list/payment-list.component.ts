import { Component, OnInit } from "@angular/core";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { PaymentService } from "../payment.service";
import { CustomerService } from "../../customer/customer.service";
import { ProudctService } from "../../product/proudct.service";
@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"],
})
export class PaymentListComponent implements OnInit {
  isPopupVisible: boolean;
  createButtonOptions: any;
  closeButtonOptions: any;
  public Customer_Code = [];
  public Project_Code = [];
  public dataExpense: any;
  public itemExpense: any;
  selectedItemKeys: any[] = [];

  constructor(
    private _getCustomer: CustomerService,
    private _getProject: ProudctService,
    private _getExpense: PaymentService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService
  ) {
    const that = this;
    this.isPopupVisible = false;
    this.closeButtonOptions = {
      text: "Close",
      onClick(e) {
        that.isPopupVisible = false;
      },
    };
  }
  ngOnInit(): void {
    this.callAPI();
    this._getCustomer.getCustomer().then((res: any) => {
      res.data.forEach((customer_code) => {
        const a = customer_code.customer_code;
        this.Customer_Code.push(a);
      });
    });
    this._getProject.getProJect().then((res: any) => {
      res.data.forEach((project_code) => {
        const b = project_code.project_code;
        this.Project_Code.push(b);
      });
    });
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  callAPI() {
    this._getExpense.getExpense().then((res_expense) => {
      res_expense.data.forEach((item) => {
        this.itemExpense = item;
      });
      this.dataExpense = res_expense.data;
    });
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  async deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getExpense.deletePayment(key._id).then((res: any) => {
        this.callAPI();
      });
    });

    if (this._ls.LOCAL_STORAGE_KEY !== "") {
      this._notiSwal.notificationSwalToast(
        "Delete Expense Success",
        "",
        "success"
      );
    }
  }

  //create cost
  formData: any = {
    project_code: "",
    customer_code: "",
    reason: "",
    amount: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { project_code, customer_code, reason, amount } = this.formData;
    let params: any = {
      customer_code,
      project_code,
      reason,
      amount: parseFloat(amount),
    };
    //let a = <number>1234;
    this._getExpense.createPayment(params).then((res: any) => {
      console.log("payment", params);
      this.callAPI();
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Create Cost Success",
          "",
          "success"
        );

        this.formData = {
          customer_code: "",
          project_code: "",
          reason: "",
          amount: 0,
        };
      } else {
        this._notiSwal.notificationSwalToast(
          "Login",
          "Incorrect User or Password",
          "error"
        );
      }
    });
  }
}
