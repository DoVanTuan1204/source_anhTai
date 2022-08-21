import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CustomerService } from "../customer.service";
import { LocalStoreService } from "src/app/shared/services/local-store.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
  @Input() item = "hehe"; // decorate the property with @Input()
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
      });
      this.DataCustomer = res_customer.data;
      //this.output_CustomerList_code.emit(this.DataCustomer.customer_code);
    });
  }
}
