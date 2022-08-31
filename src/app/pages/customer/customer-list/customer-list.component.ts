import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from "@angular/core";
import { CustomerService } from "../customer.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { DxDataGridComponent } from "devextreme-angular";
import SpeedDialAction from "devextreme/ui/speed_dial_action";
@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  isPopupVisible: boolean;
  createButtonOptions: any;
  closeButtonOptions: any;
  DataCustomer: [];
  selectedItemKeys: any[] = [];

  constructor(
    private _getCustomer: CustomerService,
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
  }

  //gọi api
  callAPI() {
    this._getCustomer.getCustomer().then((res_customer: any) => {
      this.DataCustomer = res_customer.data;
    });
  }

  // tick để xoá
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  //xoá đã tích :D
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getCustomer.deleteCustomer(key._id).then((res: any) => {
        this.callAPI();
      });
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Delete Customer Success",
          "",
          "success"
        );
      }
    });
  }

  //Hiển thị modal
  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
  //create customer
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
        this.formData = {
          customer_code: "",
          customer_name: "",
          address: "",
          contact_no: "",
        };
        this.callAPI();
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
