import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "src/app/app.config";
import { Parameter } from "../model/request.model";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private _http: HttpClient) {}
  public TokenBeare: any;
  getGrid(jsonFile: string): Observable<any> {
    const API_URl = "assets/config/grids/" + jsonFile;
    return this._http.get<any>(API_URl);
  }

  public login<T>(path: string, tentity: T): Observable<any> {
    const API_URL = AppConfig.settings.API_URl + path;
    return this._http.post<any>(API_URL, tentity);
  }

  getData(path: string): Observable<any> {
    const API_URl = AppConfig.settings.API_URl + path;
    var reqHeader = new HttpHeaders({
      "Content-Type": "json",
      Authorization: `Bearer ${this.TokenBeare}`,
    });
    return this._http.get<any>(API_URl, { headers: reqHeader });
  }

  getRecord(path: string, params: Parameter[], value: string): Observable<any> {
    const API_URl = AppConfig.settings.API_URl + path + "/" + value;
    const httpOptions = { params: this.buildParam(params) };
    return this._http.get<any>(API_URl, httpOptions);
  }

  createRecord<T>(path: string, tentIty: T): Observable<any> {
    const API_URl = AppConfig.settings.API_URl + path;
    return this._http.post<any>(API_URl, tentIty);
  }

  updateRecord<T>(path: string, tentIty: T, id?: string): Observable<any> {
    let API_URl: string = AppConfig.settings.API_URl + path;
    if (id !== null) {
      API_URl = AppConfig.settings.API_URl + path + "/" + id;
    }
    return this._http.put<any>(API_URl, tentIty);
  }

  deleteRecord(path: string): Observable<any> {
    const API_URl = AppConfig.settings.API_URl + path;
    return this._http.delete(API_URl);
  }

  buildParam(parameters: Parameter[]): HttpParams {
    let params = new HttpParams();
    if (parameters && parameters.length > 0) {
      parameters.forEach((p) => {
        if (p.value != undefined && p.value !== "" && p.value.length > 0) {
          params = params.append(p.key, p.value);
        }
      });
    }
    return params;
  }
}
