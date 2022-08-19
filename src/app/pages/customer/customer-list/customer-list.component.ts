import { Component, OnInit } from "@angular/core";
import { DxDataGridModule } from "devextreme-angular";
import { CustomerService } from "../customer.service";
import { RequestService } from "src/app/shared/services/request.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  @Output() ouput_CustomerList = new EventEmitter<string>();
  addNewItem(value: string) {}
  constructor(
    private _getCustomer: CustomerService,
    public _ls: LocalStoreService
  ) {}
  public DataCustomer: any;
  public itemCustomer: any;
  public id_Customer;
  ngOnInit(): void {
    this._getCustomer.getCustomer().then((res_customer: any) => {
      res_customer.data.forEach((item) => {
        this.itemCustomer = item;
        console.log(this.itemCustomer);
        this.ouput_CustomerList.emit(this.itemCustomer.customer_code);
      });
      this.DataCustomer = res_customer.data;
    });
  }
}
