import { Component, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';
import { GridComponent } from './../../../../../shared/components/grid/grid.component';
import { ModalDeleteComponent } from './../../../../../shared/components/modal-delete/modal-delete.component';

import { UserPhotoService } from './../../../../services/user-photo.service';

@Component({
  selector: 'app-cg-user-photo-grid',
  templateUrl: './user-photo-grid.component.html'
})
export class UserPhotoGridComponent extends GridComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() parentId: string;

  @Output() editEventEmitter: EventEmitter<string> = new EventEmitter();

  @ViewChild('modalDelete') modalDelete: ModalDeleteComponent;

  constructor(
    private router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private userPhotoService: UserPhotoService) {
    super(authService);
  }

  ngOnInit() {
    this.modalDelete.init((id) => this.delete(id));
    this.filters.idUser = this.parentId;
    super.init('fileName', true, 10, () => this.get());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public edit(id: string) {
    this.editEventEmitter.emit(id);
  }

  confirmDelete(id: string): void {
    this.modalDelete.open(id);
  }

  private get(): void {
    this.isLoading = true;
    this.userPhotoService
      .page(this.getParameters())
      .takeUntil(this.ngUnsubscribe)
      .subscribe(gridData => {
        this.items = gridData.data;
        this.pagination = gridData.pagination;
        this.isLoading = false;
      });
  }

  private delete(id: string): void {
    this.isLoading = true;
    this.userPhotoService
      .delete(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        if (result.isValid) {
          this.get();
          this.helperService.message.success(result);
        } else {
          this.helperService.message.error(result);
        }
        this.modalDelete.close();
        this.isLoading = false;
      });
  }

  public download(id: string, name: string, fileName: string): void {
    this.userPhotoService.download(id, name, fileName);
  }

}
