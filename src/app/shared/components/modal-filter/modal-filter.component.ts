import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html'
})
export class ModalFilterComponent {

  private modal: NgbModalRef;
  private functionFilter: Function;

  public isLoading = false;

  @ViewChild('content') content: any;

  constructor(
    private modalService: NgbModal) { }

  public init(fnc: Function): void {
    this.functionFilter = fnc;
  }

  public open(): void {
    this.isLoading = false;
    this.modal = this.modalService.open(this.content, { windowClass: 'modal-primary modal-large' });
  }

  public close(): void {
    this.isLoading = false;
    this.modal.close();
  }

  public filter(): void {
    this.isLoading = true;
    this.functionFilter();
  }

}
