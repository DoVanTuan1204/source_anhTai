import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxDataGridModule, DxFormModule } from "devextreme-angular";
import { CreateProductComponent } from "./create-product.component";
import { CreateProductRoutingModule } from "../create-product-routing.module";
import { CustomerListComponent } from "../../customer/customer-list/customer-list.component";
import { CustomerModule } from "../../customer/customer.module";

@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    DxDataGridModule,
    DxFormModule,
    CustomerModule,
  ],
})
export class CreateProductModule {}
