import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NotificationSwalService } from './notification-swal.service';
import { formatDate } from 'devextreme/localization';
import { errorMessage } from '../model/default.model';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(
    private _notiSwal: NotificationSwalService,
  ) { }

  public handlerCreateError(err: HttpErrorResponse, title: string, textErr?: string) {
    let message = "unknown";
    if (err.error) {
      if (err.error.message) {
        message = err.error.message;
      } else {
        message = err.message ? err.message : null;
      }
    }
    if (textErr) {
      message = textErr;
    }
    let errMessage = {
      status: err.status,
      title: title,
      message: message,
    };
    return errMessage;
  }

  public handlerError(dataErr: errorMessage[]) {
    return new Promise(resolve => {
      if (dataErr.length > 0) {
        let showMessage = '';
        dataErr.forEach((itemErr, idx) => {
          let title = itemErr.title;
          let message = itemErr.message;
          if (idx === 0) {
            showMessage = `${itemErr.status} - ${title}: ${message}`
          } else {
            showMessage += `<br> ${itemErr.status} - ${title}: ${message}`
          }
        });
        let titleSwal = 'Error Message';
        this._notiSwal.notificationSwal(`${titleSwal}`, `${showMessage}`, "error");
        resolve(true);
      } else {
        resolve(false);
      }
    })
  }

  
}

