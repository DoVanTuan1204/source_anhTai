import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

@Injectable({
  providedIn: 'root'
})
export class NotificationSwalService {

  constructor(
    private translate: TranslateService,
  ) { }

  notificationSwal (title: string,content: string, type: string) {
    switch(type) {
      case 'success':
        this.messageSwal(title, content, 'success')
        return;
      case 'error':
        this.messageSwal(title, content, 'error')
          return;
      case 'warning':
        this.messageSwal(title, content, 'warning')
        return;
      case 'info':
        this.messageSwal(title, content, 'info')
        return;
      case 'question':
        this.messageSwal(title, content, 'question')
        return;
      default:
        this.messageSwal(title, content, 'info')
    }
  }

  notificationSwalToast (title: string,content: string, type: string) {
    switch(type) {
      case 'success':
        this.messageSwalToast(title, content, 'success')
        return;
      case 'error':
        this.messageSwalToast(title, content, 'error')
          return;
      case 'warning':
        this.messageSwalToast(title, content, 'warning')
        return;
      case 'info':
        this.messageSwalToast(title, content, 'info')
        return;
      case 'question':
        this.messageSwalToast(title, content, 'question')
        return;
      default:
        this.messageSwalToast(title, content, 'info')
    }
  }

  private messageSwal(title: string, html: string, icon: SweetAlertIcon) {
    Swal.fire(
      `${title}`,
      `${html}`,
      `${icon}`
    );
  }

  private messageSwalToast(title: string, text: string, icon: SweetAlertIcon) {
    Toast.fire({
      icon: `${icon}`,
      title: `${title}`,
      text: `${text}`,
    });
  }

  
}
