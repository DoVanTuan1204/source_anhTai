import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../payment.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { CustomerService } from "../../customer/customer.service";
import { ProudctService } from "../../product/proudct.service";

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
    private _createPayment: PaymentService
  ) {}
  public Customer_Code = [];
  public Project_Code = [];
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
    console.log(this.Customer_Code);
    console.log(this.Project_Code);
  }

  //create cost
  formData: any = {
    project_code: "",
    customer_code: "",
    reason: "",
    cost: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { project_code, customer_code, reason, cost } = this.formData;
    let params: any = {
      customer_code,
      project_code,
      reason,
      cost,
    };
    this._createPayment.createPayment(params).then((res: any) => {
      console.log("payment", params);
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Create Cost Success",
          "",
          "success"
        );
        this._ls.setLocalItem("project_code", project_code);
        this._ls.setLocalItem("customer_code", customer_code);
        this._ls.setLocalItem("reason", reason);
        this._ls.setLocalItem("cost", cost);
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
