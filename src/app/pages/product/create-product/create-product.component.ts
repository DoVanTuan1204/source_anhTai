import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";

import { CustomerService } from "../../customer/customer.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private _getCustomer: CustomerService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService,
    private _createProduct: ProudctService
  ) {}
  private dataCustomer: any;
  public Customer_code = [];

  ngOnInit(): void {
    this._getCustomer.getCustomer().then((res: any) => {
      res.data.forEach((code_customer) => {
        this.dataCustomer = code_customer.customer_code;
        this.Customer_code.push(this.dataCustomer);
      });
    });
    console.log(this.Customer_code);
  }

  //create Customer
  formData: any = {
    project_code: "",
    project_name: "",
    customer_code: "",
    from_date: "",
    to_date: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { project_code, project_name, customer_code, from_date, to_date } =
      this.formData;
    let params: any = {
      project_code,
      project_name,
      customer_code,
      from_date,
      to_date,
    };
    this._createProduct.createProJect(params).then((res: any) => {
      console.log("res_create project", params);

      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Create Project Success",
          "",
          "success"
        );

        this.formData = {
          project_code: "",
          project_name: "",
          customer_code: "",
          from_date: "",
          to_date: "",
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
