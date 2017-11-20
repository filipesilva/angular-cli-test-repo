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

import { MenuItem } from './../models/menu-item';

@Injectable()
export class MenuItemService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: MenuItem): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItem`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: string, item: MenuItem): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItem/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: MenuItem): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.idMenuItem, item);
  }

  delete(id: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItem/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: string): Observable<MenuItem> {
    const url = `${this.urlApi}/cg/menuItem/${id}`;
    return this.httpClient.get<MenuItem>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<MenuItem[]> {
    const url = `${this.urlApi}/cg/menuItem`;
    return this.httpClient.get<MenuItem[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getSelectList(): Observable<IOption[]> {
    const url = `${this.urlApi}/cg/menuItem/selectList`;
    return this.httpClient.get<MenuItem[]>(url, { headers: this.getAuthHeaders() })
      .map(resp => {
        return resp.map(x => ({ value: x.idMenuItem.toString(), label: x.recursiveName }));
      })
      .catch(err => this.handleError(err));
  }

  getRecursive(): Observable<MenuItem[]> {
    const url = `${this.urlApi}/cg/menuItem/recursive`;
    return this.httpClient.get<MenuItem[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getMenuSite(groupName = ''): Observable<MenuItem[]> {
    const url = `${this.urlApi}/cg/menuItem/site/${groupName}`;
    return this.httpClient.get<MenuItem[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/cg/menuItem/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
