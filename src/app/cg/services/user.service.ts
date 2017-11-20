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

import { User } from './../models/user';

@Injectable()
export class UserService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: User): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/user`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: string, item: User): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/user/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: User): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.idUser, item);
  }

  delete(id: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/user/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: string): Observable<User> {
    const url = `${this.urlApi}/cg/user/${id}`;
    return this.httpClient.get<User>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<User[]> {
    const url = `${this.urlApi}/cg/user`;
    return this.httpClient.get<User[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getSelectList(): Observable<IOption[]> {
    const url = `${this.urlApi}/cg/user/selectList`;
    return this.httpClient.get<User[]>(url, { headers: this.getAuthHeaders() })
      .map(resp => {
        return resp.map(x => ({ value: x.idUser.toString(), label: x.fullName }));
      })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/cg/user/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
