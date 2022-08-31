import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreListComponent } from "./store-list/store-list.component";
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
} from "devextreme-angular";
import { DxiItemModule } from "devextreme-angular/ui/nested";

@NgModule({
  declarations: [StoreListComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxPopupModule,
    DxiItemModule,
  ],
})
export class StoreModule {}
