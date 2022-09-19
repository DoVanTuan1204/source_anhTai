import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DxDataGridModule } from "devextreme-angular";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
const routes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: "createProject",
    component: CreateProductComponent,
    pathMatch: "full",
  },
  {
    path: ":id",
    component: CreateProductComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DxDataGridModule],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
