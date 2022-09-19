import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateCustomerRoutingModule } from "../create-customer-routing.module";
import { CustomerRoutingModule } from "../customer-routing.module";
import { CreateCustomerComponent } from "../create-customer/create-customer.component";
import {
  DxButtonComponent,
  DxButtonGroupModule,
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
} from "devextreme-angular";
import { DxoButtonOptionsModule } from "devextreme-angular/ui/nested";

@NgModule({
  declarations: [CreateCustomerComponent],
  imports: [
    CommonModule,
    CreateCustomerRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    DxoButtonOptionsModule,
    DxButtonGroupModule,
  ],
})
export class CreateCustomerModule {}
