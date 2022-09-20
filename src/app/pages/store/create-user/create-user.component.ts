import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LocalStoreService } from "src/app/shared/services/local-store.service";
import { NotificationSwalService } from "src/app/shared/services/notification-swal.service";
import { StoreService } from "../store.service";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private _craeteUser: StoreService,
    private _ls: LocalStoreService,
    private _notiSwal: NotificationSwalService,
    private _getUserByEmail: StoreService,
    private _router: Router
  ) {}
  public a: string;
  public b: string;

  ngOnInit(): void {
    this._getUserByEmail
      .getUserByID(this._router.url.slice(6))
      .then((data: any) => {
        if (data.data.email === "") {
          this.a = "Create User";
          this.b = "Create User";
        } else {
          this.a = "Detail User";
          this.b = "Update User";
        }
        this.formData = {
          email: data.data.email,
          password: data.data.password,
          created_by: data.data.create_by,
          update_by: data.data.update_by,
        };
      });
  }

  //create cost
  formData: any = {
    email: "",
    password: "",
    created_by: "",
    update_by: "",
  };
  onSubmit(e) {
    e.preventDefault();
    const { email, password, created_by, update_by } = this.formData;
    let params: any = {
      email,
      password,
      created_by,
      update_by,
    };
    this._craeteUser.createUser(params);
    if (this._ls.LOCAL_STORAGE_KEY !== "") {
      this._notiSwal.notificationSwalToast("Success", "", "success");
      if (this._router.url === "/createUser") {
      } else {
        this._router.navigate(["/User"]);
      }
      this.formData = {
        email: "",
        password: "",
        created_by: "",
        update_by: "",
      };
    } else {
      this._notiSwal.notificationSwalToast(
        "create",
        "Create User error",
        "error"
      );
    }
  }
  backToUser = () => {
    this._router.navigate(["/User"]);
  };
}
