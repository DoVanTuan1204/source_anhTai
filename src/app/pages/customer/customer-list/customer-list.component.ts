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
@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  @ViewChild("dataGridVar", { static: false })
  dataGrid: DxDataGridComponent;
  @Input() item = "hehe"; // decorate the property with @Input()
  constructor(
    private _getCustomer: CustomerService,
    public _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService
  ) {}
  public DataCustomer: any;

  public itemCustomer: any;
  public id_Customer;
  selectedItemKeys: any[] = [];
  ngOnInit(): void {
    this._getCustomer.getCustomer().then((res_customer: any) => {
      res_customer.data.forEach((item) => {
        this.itemCustomer = item;
      });
      this.DataCustomer = res_customer.data;

      //this.output_CustomerList_code.emit(this.DataCustomer.customer_code);
    });
  }

  selectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }
  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this._getCustomer.deleteCustomer(key._id).then((res: any) => {
        this.ngOnInit();
      });
      this.dataGrid.instance.refresh(this.DataCustomer);
      if (this._ls.LOCAL_STORAGE_KEY !== "") {
        this._notiSwal.notificationSwalToast(
          "Delete Customer Success",
          "",
          "success"
        );
      }
    });
  }
}
