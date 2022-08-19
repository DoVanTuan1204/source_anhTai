import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DxDataGridModule } from "devextreme-angular";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DxDataGridModule],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
