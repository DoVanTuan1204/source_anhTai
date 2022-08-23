import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreListComponent } from "./store-list/store-list.component";
import { DxButtonModule, DxDataGridModule } from "devextreme-angular";

@NgModule({
  declarations: [StoreListComponent],
  imports: [CommonModule, StoreRoutingModule, DxDataGridModule, DxButtonModule],
})
export class StoreModule {}
