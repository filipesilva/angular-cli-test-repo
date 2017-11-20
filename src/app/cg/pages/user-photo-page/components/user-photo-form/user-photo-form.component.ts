import { Component, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';
import { SettingsService } from './../../../../../shared/services/settings.service';
import { FormComponent } from './../../../../../shared/components/form/form.component';
import { FileComponent } from './../../../../../shared/components/file/file.component';
import { FileFormData } from './../../../../../shared/models/file-form-data';

import { UserPhotoService } from './../../../../services/user-photo.service';
import { UserPhoto } from './../../../../models/user-photo';

@Component({
  selector: 'app-cg-user-photo-form',
  templateUrl: './user-photo-form.component.html'
})
export class UserPhotoFormComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;

  @Input() parentId: string;
  @Input() newRecord: boolean;
  @Input() item: UserPhoto;

  @Output() gridRefreshEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output() backEventEmitter: EventEmitter<any> = new EventEmitter();
  @Output() uploadEventEmitter: EventEmitter<any> = new EventEmitter();

  @ViewChild('filePhoto') filePhoto: FileComponent;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private helperService: HelperService,
    private userPhotoService: UserPhotoService) {
    super(authService, settingsService);
  }

  ngOnInit() {
    this.loadSelects();
    this.buildFormGroup();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      idUser: [this.item.idUser, []],
    });
  }

  public back(): void {
    this.backEventEmitter.emit(null);
  }

  public save(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const item = this.formGroup.value;
      this.userPhotoService
        .save(this.newRecord, item)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
            this.upload(result.data);
            this.helperService.message.success(result);
            this.gridRefreshEventEmitter.emit(null);
            setTimeout(() => { this.back(); }, 0);
          } else {
            this.helperService.message.error(result);
          }
          this.isLoading = false;
        });
    }
  }

  public upload(id): void {
    const files: FileFormData[] = [];
    this.filePhoto.appendFiles('photo', files);
    this.uploadEventEmitter.emit({id, files});
  }

  public download(id: string, name: string, fileName: string): void {
    this.userPhotoService.download(id, name, fileName);
  }

  public removeFilePhoto(): void {
    this.item.hasPhoto = false;
    this.filePhoto.removeFile();
  }

  private loadSelects(): void {  }

}
