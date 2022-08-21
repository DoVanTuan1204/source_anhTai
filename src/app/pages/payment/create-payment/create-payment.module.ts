import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreatePaymentComponent } from "./create-payment.component";
import { CreatePaymentRoutingModule } from "../create-payment-routing.module";
import { DxFormModule } from "devextreme-angular";

@NgModule({
  declarations: [CreatePaymentComponent],
  imports: [CommonModule, CreatePaymentRoutingModule, DxFormModule],
})
export class CreatePaymentModule {}
