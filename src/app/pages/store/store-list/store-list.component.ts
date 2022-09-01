import { Component, OnInit } from "@angular/core";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { StoreService } from "../store.service";

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrls: ["./store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  public dataUser: [];
  selectedItemKeys: any[] = [];
  isPopupVisible: boolean;
  createButtonOptions: any;
  closeButtonOptions: any;
  constructor(
    private _getUser: StoreService,
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

  callAPI() {
    this._getUser.getUser().then((res_user: any) => {
      this.dataUser = res_user.data;
    });
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getUser.deleteUser(key.email).then((res: any) => {
        this.callAPI();
      });
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Delete User Success",
          "",
          "success"
        );
      }
    });
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  //create user

  //create cost
  formData: any = {
    email: "",
    password: "",
    created_by: "",
    update_by: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { email, password, created_by, update_by } = this.formData;
    let params: any = {
      email,
      password,
      created_by,
      update_by,
    };
    this._getUser.createUser(params).then((e) => {
      this.callAPI();
    });
    if (this._ls.LOCAL_STORAGE_KEY !== "") {
      this._notiSwal.notificationSwalToast(
        "Create Cost Success",
        "",
        "success"
      );
      this._ls.setLocalItem("email", email);
      this._ls.setLocalItem("password", password);
      this._ls.setLocalItem("create_by", created_by);
      this._ls.setLocalItem("update_by", update_by);
      this.formData = {
        email: "",
        password: "",
        created_by: "",
        update_by: "",
      };
    } else {
      this._notiSwal.notificationSwalToast(
        "create",
        "Create User error",
        "error"
      );
    }
  }
}
