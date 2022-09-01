import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";
import { RequestService } from "src/app/shared/services/request.service";
import { DxDataGridModule } from "devextreme-angular";
import { CustomerService } from "../../customer/customer.service";

import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
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
  private dataCustomer: [];

  constructor(
    private _getProJect: ProudctService,
    private _reqSv: RequestService,
    private _notiSwal: NotificationSwalService,
    private _ls: LocalStoreService,
    private _getCustomer: CustomerService
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
        this.dataCustomer = code_customer.customer_code;
        this.Customer_code.push(this.dataCustomer);
      });
    });
  }
  callAPI() {
    this._getProJect.getProJect().then((res: any) => {
      this.dataProject = res.data;
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
    this.isPopupVisible = !this.isPopupVisible;
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
      console.log("res_create project", params);
      this.callAPI();

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
