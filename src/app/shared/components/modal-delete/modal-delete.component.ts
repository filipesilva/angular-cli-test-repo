import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html'
})
export class ModalDeleteComponent {

  private objDelete: any;
  private functionDelete: Function;

  public isLoading = false;

  @ViewChild('modalDelete') modalDelete: ModalDirective;

  public init(fnc: Function): void {
    this.functionDelete = fnc;
  }

  public open(obj: any): void {
    this.isLoading = false;
    this.objDelete = obj;
    this.modalDelete.show();
  }

  public close(): void {
    this.isLoading = false;
    this.modalDelete.hide();
  }

  public delete(): void {
    this.isLoading = true;
    this.functionDelete(this.objDelete);
  }

}
