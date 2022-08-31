import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import {
  DxDataGridModule,
  DxFormModule,
  DxButtonModule,
  DxSpeedDialActionModule,
  DxPopupModule,
} from "devextreme-angular";
import dxSpeedDialAction from "devextreme/ui/speed_dial_action";
import { DxiItemModule } from "devextreme-angular/ui/nested";

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxSpeedDialActionModule,
    DxPopupModule,
    DxiItemModule,
  ],
})
export class CustomerModule {}
