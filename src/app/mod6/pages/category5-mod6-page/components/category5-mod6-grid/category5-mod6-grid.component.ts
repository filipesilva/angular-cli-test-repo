import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';
import { GridComponent } from './../../../../../shared/components/grid/grid.component';
import { ModalDeleteComponent } from './../../../../../shared/components/modal-delete/modal-delete.component';

import { Category5Mod6Service } from './../../../../services/category5-mod6.service';

@Component({
  selector: 'app-mod6-category5-mod6-grid',
  templateUrl: './category5-mod6-grid.component.html'
})
export class Category5Mod6GridComponent extends GridComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('modalDelete') modalDelete: ModalDeleteComponent;

  constructor(
    private router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private category5Mod6Service: Category5Mod6Service) {
    super(authService);
  }

  ngOnInit() {
    this.modalDelete.init((id) => this.delete(id));
    super.init('recursiveName', true, 10, () => this.get());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public edit(id: number) {
    this.router.navigate(['/mod6/category5-mod6', { id }]);
  }

  confirmDelete(id: number): void {
    this.modalDelete.open(id);
  }

  private get(): void {
    this.isLoading = true;
    this.category5Mod6Service
      .page(this.getParameters())
      .takeUntil(this.ngUnsubscribe)
      .subscribe(gridData => {
        this.items = gridData.data;
        this.pagination = gridData.pagination;
        this.isLoading = false;
      });
  }

  private delete(id: number): void {
    this.isLoading = true;
    this.category5Mod6Service
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

}
