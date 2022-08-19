import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateCustomerRoutingModule } from "../create-customer-routing.module";
import { CustomerRoutingModule } from "../customer-routing.module";
import { CreateCustomerComponent } from "../create-customer/create-customer.component";
import { DxDataGridModule, DxFormModule } from "devextreme-angular";

@NgModule({
  declarations: [CreateCustomerComponent],
  imports: [
    CommonModule,
    CreateCustomerRoutingModule,
    DxDataGridModule,
    DxFormModule,
  ],
})
export class CreateCustomerModule {}
