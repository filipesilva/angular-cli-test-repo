﻿import { Component, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CustomValidators } from 'ng2-validation';
import { AuthService } from './../../../../../shared/services/auth.service';
import { HelperService } from './../../../../../shared/services/helper.service';
import { SettingsService } from './../../../../../shared/services/settings.service';
import { FormComponent } from './../../../../../shared/components/form/form.component';

import { Project6Mod9Service } from './../../../../services/project6-mod9.service';
import { Category6Mod9Service } from './../../../../services/category6-mod9.service';
import { Status6Mod9Service } from './../../../../services/status6-mod9.service';
import { Severity6Mod9Service } from './../../../../services/severity6-mod9.service';
import { Issue6Mod9Service } from './../../../../services/issue6-mod9.service';
import { Issue6Mod9 } from './../../../../models/issue6-mod9';

@Component({
  selector: 'app-mod9-issue6-mod9-form',
  templateUrl: './issue6-mod9-form.component.html'
})
export class Issue6Mod9FormComponent extends FormComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public formGroup: FormGroup;

  @Input() newRecord: boolean;
  @Input() item: Issue6Mod9;

  @Output() gridRefreshEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    authService: AuthService,
    settingsService: SettingsService,
    private helperService: HelperService,
    private project6Mod9Service: Project6Mod9Service,
    private category6Mod9Service: Category6Mod9Service,
    private status6Mod9Service: Status6Mod9Service,
    private severity6Mod9Service: Severity6Mod9Service,
    private issue6Mod9Service: Issue6Mod9Service) {
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
      issueId: [this.item.issueId, []],
      projectId: [super.toString(this.item.projectId), [Validators.required]],
      title: [this.item.title, [Validators.required]],
      categoryId: [super.toString(this.item.categoryId), [Validators.required]],
      statusId: [super.toString(this.item.statusId), [Validators.required]],
      severityId: [super.toString(this.item.severityId), [Validators.required]],
      description: [this.item.description, [Validators.required]]
    });
  }

  public back(): void {
    this.router.navigate(['/mod9/issue6-mod9']);
  }

  public save(): void {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.isLoading = true;
      const item = this.formGroup.value;
      this.issue6Mod9Service
        .save(this.newRecord, item)
        .takeUntil(this.ngUnsubscribe)
        .subscribe(result => {
          if (result.isValid) {
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

  private loadSelects(): void {
    this.project6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsProject6Mod9 = items;
      });

    this.category6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsCategory6Mod9 = items;
      });

    this.status6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsStatus6Mod9 = items;
      });

    this.severity6Mod9Service
      .getSelectList()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.selects.itemsSeverity6Mod9 = items;
      });
  }

}
