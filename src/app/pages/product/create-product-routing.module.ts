import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { DxDataGridModule } from "devextreme-angular";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { CreateProductComponent } from "./create-product/create-product.component";

const routes: Routes = [
  {
    path: "",
    component: CreateProductComponent,
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes), DxDataGridModule],
  exports: [RouterModule],
})
export class CreateProductRoutingModule {}
