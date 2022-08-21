import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CreatePaymentComponent } from "./create-payment/create-payment.component";
import { AuthGuardService } from "src/app/shared/services/auth.service";

const routes: Routes = [
  {
    path: "",
    component: CreatePaymentComponent,
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePaymentRoutingModule {}
