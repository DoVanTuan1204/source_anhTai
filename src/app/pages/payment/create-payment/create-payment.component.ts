import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../payment.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { CustomerService } from "../../customer/customer.service";
import { ProudctService } from "../../product/proudct.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-payment",
  templateUrl: "./create-payment.component.html",
  styleUrls: ["./create-payment.component.scss"],
})
export class CreatePaymentComponent implements OnInit {
  constructor(
    private _getCustomer: CustomerService,
    private _getProject: ProudctService,
    private _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService,
    private _createPayment: PaymentService,
    private _getExpense: PaymentService,
    private _router: Router
  ) {}
  public Customer_Code = [];
  public Project_Code = [];
  public GetExpenseByID: any;
  public Create: string;
  public Detail: string;
  ngOnInit(): void {
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

    this._getExpense
      .getExpenseByID(this._router.url.slice(9))
      .then((res: any) => {
        this.GetExpenseByID = res.data;
        if (this.GetExpenseByID._id === "") {
          this.Create = "Create Expense";
          this.Detail = "Create Expense";
        } else {
          this.Create = "Detail Expense";
          this.Detail = "Update Expense";
        }

        this.formData = {
          customer_code: res.data.customer_code,
          project_code: res.data.project_code,
          reason: res.data.reason,
          amount: res.data.amount,
        };
      });
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
    this._createPayment.createPayment(params).then((res: any) => {
      console.log("payment", params);
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Create Cost Success",
          "",
          "success"
        );

        if (this._router.url === "/createExpense") {
        } else {
          this._router.navigate(["/Expense"]);
        }

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
  backToExpense = () => {
    this._router.navigate(["/Expense"]);
  };
}
