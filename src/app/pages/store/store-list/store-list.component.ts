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
  constructor(
    private _getUser: StoreService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService
  ) {}
  public dataUser: any;
  selectedItemKeys: any[] = [];
  ngOnInit(): void {
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
        this.ngOnInit();
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
}
