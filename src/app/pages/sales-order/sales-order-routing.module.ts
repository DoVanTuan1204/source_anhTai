import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';

const routes: Routes = [
  {
    path: '',
    component: SalesOrderListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'add',
    component: SalesOrderDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: ':id',
    component: SalesOrderDetailComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOrderRoutingModule { }
