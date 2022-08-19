import { ToolbarItem } from './toolbar.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor() { }

  itemTitle(title: string, location: string, className: string) {
    const toolbarItem: ToolbarItem = {
      key: 'title',
      location: location,
      locateInMenu: 'never',
      disabled: false,
      visible: true,
      template: `<div class="${className}">${title}</div>`
    };
    return toolbarItem;
  }

  itemWebhook(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'always',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fab fa-connectdevelop',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemSFTP(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'always',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fas fa-file-upload',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemChangePassword(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-redo',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }
  
  itemView(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-eye',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemArrowLeft(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-arrow-left',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemArrowRight(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-floppy-disk',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemFloppyDisk(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-floppy-disk',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemPaperPlane(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-paper-plane',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemCommentDots(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-comment-dots',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemPlus(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-plus',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemPenToSquare(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-pen-to-square',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemTrashCan(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-trash-can',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemInQueue(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'always',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-arrow-down',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemOutQueue(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'always',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-arrow-up',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemReload(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-arrows-rotate',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  itemClose(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fa-solid fa-xmark',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }

  
  itemAppWebhook(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fab fa-connectdevelop',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }
  
  itemAppSFTP(onClick: any, disabled: boolean, mode: string | boolean,key: string, location: string, hint: string, text?: string) {
    const toolbarItem: ToolbarItem = {
      key: key,
      location: location,
      locateInMenu: 'auto',
      widget: 'dxButton',
      disabled: disabled,
      visible: mode === 'edit' || mode === 'new' || mode === null || !!mode,
      options: {
        type: 'normal',
        text: text ? text : '',
        icon: 'fas fa-file-upload',
        hint: hint,
        onClick
      }
    };
    return toolbarItem;
  }
}
