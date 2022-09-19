import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { CreatePaymentComponent } from "./create-payment/create-payment.component";
import { PaymentListComponent } from "./payment-list/payment-list.component";

const routes: Routes = [
  {
    path: "",
    component: PaymentListComponent,
    canActivate: [AuthGuardService],
    pathMatch: "full",
  },
  {
    path: "createExpense",
    component: CreatePaymentComponent,
    pathMatch: "full",
  },

  {
    path: ":id",
    component: CreatePaymentComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
