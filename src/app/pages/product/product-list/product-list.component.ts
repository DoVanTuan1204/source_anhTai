import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";
import { RequestService } from "src/app/shared/services/request.service";
import { DxDataGridModule } from "devextreme-angular";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  constructor(
    private _getProJect: ProudctService,
    private _reqSv: RequestService,
    private _notiSwal: NotificationSwalService,
    private _ls: LocalStoreService
  ) {}
  public dataProject: any;
  public id_Project: any;
  selectedItemKeys: any[] = [];
  ngOnInit(): void {
    this._getProJect.getProJect().then((res: any) => {
      res.data.forEach((item) => {
        this.id_Project = item._id;
      });
      this.dataProject = res.data;
    });
  }
  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getProJect.deleteProject(key._id).then((res: any) => {
        this.ngOnInit();
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
}
