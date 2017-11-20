import { Injectable } from '@angular/core';
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

import { Issue8Mod5 } from './../models/issue8-mod5';

@Injectable()
export class Issue8Mod5Service extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: Issue8Mod5): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/issue`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: number, item: Issue8Mod5): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/issue/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: Issue8Mod5): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.issueId, item);
  }

  delete(id: number): Observable<NotificationResult> {
    const url = `${this.urlApi}/mod/issue/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: number): Observable<Issue8Mod5> {
    const url = `${this.urlApi}/mod/issue/${id}`;
    return this.httpClient.get<Issue8Mod5>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<Issue8Mod5[]> {
    const url = `${this.urlApi}/mod/issue`;
    return this.httpClient.get<Issue8Mod5[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/mod/issue/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
