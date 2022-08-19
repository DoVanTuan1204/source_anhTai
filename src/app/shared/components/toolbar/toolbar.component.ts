import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxToolbarComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { ToolbarItem } from './toolbar.model';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild(DxToolbarComponent, { static: false }) toolbar: DxToolbarComponent;

  @Input() toolbarItems: ToolbarItem[] = [];

  @Input() disabled = false;

  @Input() borderTopRadiusCorners = 6;
  @Input() borderBottomRadiusCorners = 0;

  @Input() marginTop = 0;
  @Input() marginRight = 0;
  @Input() marginBottom = 0;
  @Input() marginLeft = 0;

  @Input() paddingTop = 10;
  @Input() paddingRight = 0;
  @Input() paddingBottom = 10;
  @Input() paddingLeft = 0;

  @Input() title = '';

  // buttons
  @Input() iBtnReload = false;
  @Input() iBtnCreate = false;
  @Input() iBtnEdit = false;
  @Input() iBtnDelete = false;
  @Input() iBtnSave = false;
  @Input() iBtnSend = false;
  @Input() iBtnBack = false;
  @Input() iBtnJSON = false;
  @Input() iBtnView = false;
  @Input() iBtnClose = false;

  @Output() oBtnReload = new EventEmitter<void>();
  @Output() oBtnView = new EventEmitter<void>();
  @Output() oBtnCreate = new EventEmitter<void>();
  @Output() oBtnEdit = new EventEmitter<void>();
  @Output() oBtnDelete = new EventEmitter<void>();
  @Output() oBtnSave = new EventEmitter<void>();
  @Output() oBtnSend = new EventEmitter<void>();
  @Output() oBtnBack = new EventEmitter<void>();
  @Output() oBtnJSON = new EventEmitter<void>();
  @Output() oBtnClose = new EventEmitter<void>();

  public toolBarSubscription: Subscription;

  constructor(
    private _toolbar: ToolbarService
  ) { }

  ngOnInit(): void {
  
  }

  public loadDefaultToolbar() {
    // if (this.iBtnBack) {
      this.toolbarItems.push(...[this._toolbar.itemArrowLeft(this.handleBtnBack.bind(this), false, true, 'back', 'before', 'back')])
    // }
    if (this.title) {
      this.toolbarItems.push(...[this._toolbar.itemTitle(this.title, 'before', 'h4')])
    }
    if(this.iBtnReload) {
      this.toolbarItems.push(...[this._toolbar.itemReload(this.handleBtnReload.bind(this), false, true, 'reload', 'after', 'reload')])
    }
    if (this.iBtnView) {
      this.toolbarItems.push(...[this._toolbar.itemView(this.handleBtnView.bind(this), false, true, 'view', 'after', 'view')])
    }
    if (this.iBtnEdit) {
      this.toolbarItems.push(...[this._toolbar.itemPenToSquare(this.handleBtnEdit.bind(this), false, true, 'edit', 'after', 'edit')])
    }
    if (this.iBtnSave) {
      this.toolbarItems.push(...[this._toolbar.itemFloppyDisk(this.handleBtnSave.bind(this), false, true, 'save', 'after', 'save')])
    }
    if (this.iBtnSend) {
      this.toolbarItems.push(...[this._toolbar.itemPaperPlane(this.handleBtnSend.bind(this), false, true, 'send', 'after', 'send')])
    }
    if (this.iBtnJSON) {
      this.toolbarItems.push(...[this._toolbar.itemCommentDots(this.handleBtnJSON.bind(this), false, true, 'json', 'after', 'json')])
    }
    if (this.iBtnCreate) {
      this.toolbarItems.push(...[this._toolbar.itemPlus(this.handleBtnCreate.bind(this), false, true, 'create', 'after', 'create')])
    }
    if (this.iBtnDelete) {
      this.toolbarItems.push(...[this._toolbar.itemTrashCan(this.handleBtnDelete.bind(this), false, true, 'delete', 'after', 'delete')])
    }
    if (this.iBtnClose) {
      this.toolbarItems.push(...[this._toolbar.itemClose(this.handleClose.bind(this), false, true, 'close', 'after', 'close')])
    }
  }

  handleBtnCreate(event) {
    this.oBtnCreate.emit(event);
  }

  handleBtnEdit(event) {
    this.oBtnEdit.emit(event);
  }

  handleBtnDelete(event) {
    this.oBtnDelete.emit(event);
  }

  handleBtnSave(event) {
    this.oBtnSave.emit(event);
  }

  handleBtnSend(event) {
    this.oBtnSend.emit(event);
  }

  handleBtnBack(event) {
    this.oBtnBack.emit(event);
  }

  handleBtnReload(event) {
    this.oBtnReload.emit(event);
  }

  handleBtnJSON(event) {
    this.oBtnJSON.emit(event);
  }

  handleBtnView(event) {
    this.oBtnView.emit(event);
  }

  handleClose(event) {
    this.oBtnClose.emit(event);
  }

  public ngOnDestroy() {
    if (this.toolBarSubscription) {
      this.toolBarSubscription.unsubscribe();
    }
  }

}
