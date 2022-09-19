import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CreateCustomerComponent } from "./create-customer/create-customer.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: CustomerListComponent,
    canActivate: [AuthGuardService],
    pathMatch: "full",
  },

  // {
  //   path: "createCustomer",
  //   loadChildren: () =>
  //     import("./create-customer/create-customer.module").then(
  //       (m) => m.CreateCustomerModule
  //     ),
  //   data: { title: "createcustomer", breadcrumb: "createcustomer" },
  // },
  // {
  //   path: "aa",
  //   loadChildren: () =>
  //     import("./create-customer/create-customer.component").then(
  //       (m) => m.CreateCustomerComponent
  //     ),
  //   data: { title: "aa", breadcrumb: "aa" },
  // },
  {
    path: "createCustomer",
    component: CreateCustomerComponent,
    pathMatch: "full",
  },
  {
    path: ":id",
    component: CreateCustomerComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
