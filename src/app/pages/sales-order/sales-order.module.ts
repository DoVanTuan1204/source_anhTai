import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesOrderRoutingModule } from './sales-order-routing.module';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    SalesOrderListComponent,
    SalesOrderDetailComponent
  ],
  imports: [
    CommonModule,
    SalesOrderRoutingModule,
    ComponentsModule
  ]
})
export class SalesOrderModule { }
