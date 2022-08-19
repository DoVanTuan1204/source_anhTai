import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { RequestService } from "src/app/shared/services/request.service";

@Injectable({
  providedIn: "root",
})
export class ProudctService {
  public path_project = "/project";

  constructor(private _reqService: RequestService) {}
  getProJect(): Promise<any> {
    return firstValueFrom(this._reqService.getData(this.path_project));
  }
}
