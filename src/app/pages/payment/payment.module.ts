import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentListComponent } from "./payment-list/payment-list.component";
import dxDataGrid from "devextreme/ui/data_grid";
import { DxDataGridModule } from "devextreme-angular";

@NgModule({
  declarations: [PaymentListComponent],
  imports: [CommonModule, PaymentRoutingModule, DxDataGridModule],
})
export class PaymentModule {}
