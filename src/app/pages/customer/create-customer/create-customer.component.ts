import { Component, OnInit } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { CustomerService } from "../customer.service";
import { RequestService } from "src/app/shared/services/request.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.scss"],
})
export class CreateCustomerComponent implements OnInit {
  constructor(
    private _getCustomer: CustomerService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService
  ) {}

  ngOnInit(): void {}

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
        this._notiSwal.notificationSwalToast(
          "Create Customer Success",
          "",
          "success"
        );
        this._ls.setLocalItem("customer_code", customer_code);
        this._ls.setLocalItem("customer_name", customer_name);
        this._ls.setLocalItem("address", address);
        this._ls.setLocalItem("contact_no", contact_no);
        this.formData = "";
      } else {
        this._notiSwal.notificationSwal(
          "Login",
          "Incorrect User or Password",
          "error"
        );
      }
    });

    console.log(params);
  }
}
