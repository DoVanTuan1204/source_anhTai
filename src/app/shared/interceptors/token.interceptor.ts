import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { RequestService } from "../services/request.service";
import { LocalStoreService } from "../services/local-store.service";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private _keyBeare: RequestService,
    private _ls: LocalStoreService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var changedReq;
    changedReq = req.clone({
      setHeaders: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return next.handle(changedReq);
  } //
}
