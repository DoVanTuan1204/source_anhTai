import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth.service";

const routes: Routes = [
  {
    path: "",
    component: CreateCustomerComponent,
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCustomerRoutingModule {}
