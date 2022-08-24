import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateUserComponent } from "./create-user.component";
import { DxFormModule } from "devextreme-angular";
import { CreateCustomerRoutingModule } from "../../customer/create-customer-routing.module";
import { CreateUserRoutingModule } from "../create-user-routing.module";

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, DxFormModule, CreateUserRoutingModule],
})
export class CreateUserModule {}
