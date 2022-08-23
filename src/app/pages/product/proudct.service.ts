import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { RequestService } from "src/app/shared/services/request.service";
import { Parameter } from "src/app/shared/model/request.model";
@Injectable({
  providedIn: "root",
})
export class ProudctService {
  public path_project = "/project";

  constructor(private _reqService: RequestService) {}
  getProJect(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_project));
  }
  createProJect(params: Parameter[]): Promise<any> {
    return firstValueFrom(
      this._reqService.createRecord(this.path_project, params)
    );
  }
  deleteProject(id: Parameter[]): Promise<any> {
    return firstValueFrom(this._reqService.deleteRecord(this.path_project, id));
  }
}
