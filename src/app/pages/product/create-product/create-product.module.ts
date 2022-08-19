import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DxDataGridModule, DxFormModule } from "devextreme-angular";
import { CreateProductComponent } from "./create-product.component";
import { CreateProductRoutingModule } from "../create-product-routing.module";
import dxDataGrid from "devextreme/ui/data_grid";
@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    DxDataGridModule,
    DxFormModule,
  ],
})
export class CreateProductModule {}
