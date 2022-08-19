import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, firstValueFrom } from "rxjs";
import { IAppConfig } from "./shared/model/app.config.model";
import { LocalStoreService } from "./shared/services/local-store.service";

@Injectable()
export class AppConfig {
  static settings: IAppConfig;
  private ls: LocalStoreService;
  constructor(private http: HttpClient) {}
  load() {
    const jsonFile = `assets/config/config.json`;
    return new Promise<void>((resolve, reject) => {
      firstValueFrom(this.http.get(jsonFile))
        .then((response: IAppConfig) => {
          AppConfig.settings = <IAppConfig>response;
          resolve();
        })
        .catch((response: any) => {
          this.ls.clearLocal();
          resolve();
          //reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
        });
    });
  }
}
