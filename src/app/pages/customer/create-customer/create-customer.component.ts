import { Component, OnInit } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { CustomerService } from "../customer.service";
import { RequestService } from "src/app/shared/services/request.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.scss"],
})
export class CreateCustomerComponent implements OnInit {
  constructor(
    private _getCustomer: CustomerService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService,
    private _router: Router
  ) {}

  public updateCustomer: any;

  public a: string;
  public b: string;

  ngOnInit(): void {
    this._getCustomer
      .getCustomerByID(this._router.url.slice(10))
      .then((data: any) => {
        this.updateCustomer = data.data;

        if (this.updateCustomer._id === "") {
          this.a = "Create Custommer";
          this.b = "Create Custommer";
        } else {
          this.a = "Detail Custommer";
          this.b = "Update Custommer";
        }
        this.formData = {
          customer_code: this.updateCustomer?.customer_code || "",
          customer_name: this.updateCustomer?.customer_name || "",
          address: this.updateCustomer?.address || "",
          contact_no: this.updateCustomer?.contact_no || "",
        };
      });
  }
  //create Customer
  formData: any = {
    customer_code: "",
    customer_name: "",
    address: "",
    contact_no: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { customer_code, customer_name, address, contact_no } = this.formData;
    let params: any = {
      customer_code,
      customer_name,
      address,
      contact_no,
    };

    this._getCustomer.createCustomer(params).then((res: any) => {
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast("Success", "", "success");
        this.formData = {
          customer_code: "",
          customer_name: "",
          address: "",
          contact_no: "",
        };
        if (this._router.url === "/createCustomer") {
        } else {
          this._router.navigate(["/Customer"]);
        }
      } else {
        this._notiSwal.notificationSwal("error", "", "error");
      }
    });
  }
  backToCustomer = () => {
    this._router.navigate(["/Customer"]);
  };
}
