import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";
import { RequestService } from "src/app/shared/services/request.service";
import { DxDataGridModule } from "devextreme-angular";
import { CustomerService } from "../../customer/customer.service";

import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  isPopupVisible: boolean;
  createButtonOptions: any;
  closeButtonOptions: any;
  public dataProject: [];
  selectedItemKeys: any[] = [];
  public Customer_code = [];

  constructor(
    private _getProJect: ProudctService,
    private _reqSv: RequestService,
    private _notiSwal: NotificationSwalService,
    private _ls: LocalStoreService,
    private _getCustomer: CustomerService,
    private _router: Router
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
      res.data.forEach((code_customer) => {
        const itemCustomer_code = code_customer.customer_code;
        this.Customer_code.push(itemCustomer_code);
      });
    });
  }
  callAPI() {
    this._getProJect.getProJect().then((res: any) => {
      this.dataProject = res.data;
      console.log(res);
    });
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getProJect.deleteProject(key._id).then((res: any) => {
        this.callAPI();
      });
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Delete Project Success",
          "",
          "success"
        );
      }
    });
  }

  togglePopup(): void {
    // this.isPopupVisible = !this.isPopupVisible;
    this._router.navigate(["/createProject"]);
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
    this._getProJect.createProJect(params).then((res: any) => {
      this.callAPI();

      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast("Success", "", "success");

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
  // onrow updating
  updateRow(e) {
    console.log("hehehehhe", e.data._id);
    this._router.navigate([`Project/${e.data._id}`]);
    this._getCustomer.getCustomerByID(e.data._id);
  }
}
