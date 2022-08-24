import { Component, OnInit } from "@angular/core";

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
    private _notiSwal: NotificationSwalService
  ) {}

  ngOnInit(): void {}

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
      this._notiSwal.notificationSwalToast(
        "Create Cost Success",
        "",
        "success"
      );
      this._ls.setLocalItem("email", email);
      this._ls.setLocalItem("password", password);
      this._ls.setLocalItem("create_by", created_by);
      this._ls.setLocalItem("update_by", update_by);
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
}
