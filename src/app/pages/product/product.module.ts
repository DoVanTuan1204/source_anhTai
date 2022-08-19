import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxFormModule,
} from "devextreme-angular";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import dxDataGrid from "devextreme/ui/data_grid";
import { CreateProductComponent } from "./create-product/create-product.component";

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ProductRoutingModule, DxFormModule, DxDataGridModule],
})
export class ProductModule {}
