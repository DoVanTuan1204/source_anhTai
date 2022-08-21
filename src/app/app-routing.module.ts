import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from "./shared/components";
import { AuthGuardService } from "./shared/services";
import { DxDataGridModule, DxFormModule } from "devextreme-angular";
import { SalesOrderListComponent } from "./pages/sales-order/sales-order-list/sales-order-list.component";

export const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuardService],
    children: [
      {
        path: "SalesOrder",
        loadChildren: () =>
          import("./pages/sales-order/sales-order.module").then(
            (m) => m.SalesOrderModule
          ),
        data: { title: "Sales Order", breadcrumb: "Sales Order" },
      },
      {
        path: "Customer",
        loadChildren: () =>
          import("./pages/customer/customer.module").then(
            (m) => m.CustomerModule
          ),
        data: { title: "Customer", breadcrumb: "Customer" },
      },
      {
        path: "createCustomer",
        loadChildren: () =>
          import(
            "./pages/customer/create-customer/create-customer.module"
          ).then((m) => m.CreateCustomerModule),
        data: { title: "createcustomer", breadcrumb: "createcustomer" },
      },

      {
        path: "Product",
        loadChildren: () =>
          import("./pages/product/product.module").then((m) => m.ProductModule),
        data: { title: "Product", breadcrumb: "Product" },
      },
      {
        path: "createProject",
        loadChildren: () =>
          import("./pages/product/create-product/create-product.module").then(
            (m) => m.CreateProductModule
          ),
        data: { title: "createProduct", breadcrumb: "createProduct" },
      },
      {
        path: "Store",
        loadChildren: () =>
          import("./pages/store/store.module").then((m) => m.StoreModule),
        data: { title: "Store", breadcrumb: "Store" },
      },
      {
        path: "Payment",
        loadChildren: () =>
          import("./pages/payment/payment.module").then((m) => m.PaymentModule),
        data: { title: "Payment", breadcrumb: "Payment" },
      },
      {
        path: "createCost",
        loadChildren: () =>
          import("./pages/payment/create-payment/create-payment.module").then(
            (m) => m.CreatePaymentModule
          ),
        data: { title: "createPayment", breadcrumb: "createPayment  " },
      },
    ],
  },
  {
    path: "login-form",
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "reset-password",
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "create-account",
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "change-password/:recoveryCode",
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
