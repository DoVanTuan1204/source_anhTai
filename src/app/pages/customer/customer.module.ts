import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { DxDataGridModule, DxFormModule } from "devextreme-angular";

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DxDataGridModule,
    DxFormModule,
  ],
})
export class CustomerModule {}
