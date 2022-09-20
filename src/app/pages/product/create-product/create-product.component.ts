import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";

import { CustomerService } from "../../customer/customer.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { Router } from "@angular/router";
import { parseDate } from "devextreme/localization";
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
    private _createProduct: ProudctService,
    private _router: Router
  ) {}
  private dataCustomer: any;
  public Customer_code = [];
  public datetimeField: string;
  public Create: string;
  public Detail: string;

  ngOnInit(): void {
    this._getCustomer.getCustomer().then((res: any) => {
      res.data.forEach((code_customer) => {
        this.dataCustomer = code_customer.customer_code;
        this.Customer_code.push(this.dataCustomer);
      });
    });
    this._createProduct
      .getProjectByID(this._router.url.slice(9))
      .then((res: any) => {
        if (res.data._id === "") {
          this.Create = "Create Custommer";
          this.Detail = "Create Custommer";
        } else {
          this.datetimeField = "datetime";
          this.Create = "Detail Custommer";
          this.Detail = "Update Custommer";
        }

        console.log("date", res.data.to_date);

        this.formData = {
          project_code: res.data.project_code,
          project_name: res.data.project_name,
          customer_code: res.data.customer_code,
          from_date: res.data.from_date.slice(-19, 10),
          to_date: res.data.to_date.slice(-19, 10),
        };
      });
  }

  backToProject = () => {
    this._router.navigate(["/Project"]);
  };
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
