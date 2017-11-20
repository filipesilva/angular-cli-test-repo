import { Component, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { AuthService } from './../../../shared/services/auth.service';
import { HelperService } from './../../../shared/services/helper.service';
import { PageComponent } from './../../../shared/components/page/page.component';
import { TranslateService } from '@ngx-translate/core';
import { CommunicationService } from './../../../shared/services/communication.service';
import { FileFormData } from './../../../shared/models/file-form-data';
import { UserPhotoGridComponent } from './components/user-photo-grid/user-photo-grid.component';
import { UserPhoto } from './../../models/user-photo';

import { UserPhotoService } from './../../services/user-photo.service';

@Component({
  selector: 'app-cg-user-photo-page',
  templateUrl: './user-photo-page.component.html',
  providers: [
    UserPhotoService
  ]
})
export class UserPhotoPageComponent extends PageComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public newRecord: boolean;
  public item: UserPhoto;

  @Input() parentId: string;

  @ViewChild('grid') grid: UserPhotoGridComponent;

  constructor(
    private route: ActivatedRoute,
    router: Router,
    authService: AuthService,
    private helperService: HelperService,
    private translateService: TranslateService,
    private communicationService: CommunicationService,
    private userPhotoService: UserPhotoService) {
    super(router, authService);
  }

  ngOnInit() {
    super.checkPermission('cg.user.select');
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public new(): void {
    this.newRecord = true;
    this.item = {} as UserPhoto;
    this.item.idUser = this.parentId;
  }

  public back(): void {
    this.item = null;
  }

  public edit(id: string): void {
    this.grid.isLoading = true;
    this.newRecord = false;
    this.userPhotoService
      .getById(id)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.item = item;
        this.grid.isLoading = false;
      });
  }

  public upload(obj) {
    for (const file of obj.files) {
      this.userPhotoService.upload(obj.id, file.name, file).then(res => {
        if (res.result.isValid) {
          this.communicationService.setUploadMessage(this.translateService.instant('shared.input.file.success'), 'success');
          setTimeout(() => { this.communicationService.setUploadMessage(); }, 5000);
          this.grid.search();
        }
      }).catch((data) => {
        this.communicationService.setUploadMessage(this.translateService.instant('shared.input.file.error'), 'danger');
        setTimeout(() => { this.communicationService.setUploadMessage(); }, 5000);
      });
    }
  }

}
