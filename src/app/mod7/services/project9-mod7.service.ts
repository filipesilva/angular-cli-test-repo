﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { BaseService } from './../../shared/services/base.service';
import { HelperService } from './../../shared/services/helper.service';
import { SettingsService } from './../../shared/services/settings.service';
import { GridParameter } from './../../shared/models/grid-parameter';
import { GridData } from './../../shared/models/grid-data';
import { NotificationResult } from './../../shared/models/notification-result';
import { IOption } from './../../shared/models/ioption';

import { Project9Mod7 } from './../models/project9-mod7';

@Injectable()
export class Project9Mod7Service extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: Project9Mod7): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/project`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: number, item: Project9Mod7): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/project/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: Project9Mod7): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.projectId, item);
  }

  delete(id: number): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/project/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: number): Observable<Project9Mod7> {
    const url = `${this.urlApi}/mod/project/${id}`;
    return this.httpClient.get<Project9Mod7>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<Project9Mod7[]> {
    const url = `${this.urlApi}/mod/project`;
    return this.httpClient.get<Project9Mod7[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getSelectList(): Observable<IOption[]> {
    const url = `${this.urlApi}/mod/project/selectList`;
    return this.httpClient.get<Project9Mod7[]>(url, { headers: this.getAuthHeaders() })
      .map(resp => {
        return resp.map(x => ({ value: x.projectId.toString(), label: x.projectName }));
      })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/mod/project/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
