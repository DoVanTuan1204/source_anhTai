import { Component, OnInit } from "@angular/core";
import { ProudctService } from "../proudct.service";
import { RequestService } from "src/app/shared/services/request.service";
import { DxDataGridModule } from "devextreme-angular";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  constructor(
    private _getProJect: ProudctService,
    private _reqSv: RequestService
  ) {}
  public dataProject: any;
  public id_Project: any;
  ngOnInit(): void {
    this._getProJect.getProJect().then((res: any) => {
      res.data.forEach((item) => {
        this.id_Project = item._id;
        console.log(this.id_Project);
      });
      this.dataProject = res.data;
    });
  }
}
