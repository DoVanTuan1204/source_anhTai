import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentListComponent } from "./payment-list/payment-list.component";
import dxDataGrid from "devextreme/ui/data_grid";
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
} from "devextreme-angular";
import { RouterModule } from "@angular/router";
import { DxiItemModule } from "devextreme-angular/ui/nested";

@NgModule({
  declarations: [PaymentListComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxiItemModule,
    DxFormModule,
  ],
})
export class PaymentModule {}
