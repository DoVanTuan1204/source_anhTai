import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth.service";
import { CreateUserComponent } from "./create-user/create-user.component";
import { StoreListComponent } from "./store-list/store-list.component";

const routes: Routes = [
  {
    path: "",
    component: StoreListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "createUser",
    component: CreateUserComponent,
    pathMatch: "full",
  },
  {
    path: ":id",
    component: CreateUserComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
