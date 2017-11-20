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

import { MenuItemCulture } from './../models/menu-item-culture';

@Injectable()
export class MenuItemCultureService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: MenuItemCulture): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItemCulture`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: string, item: MenuItemCulture): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItemCulture/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: MenuItemCulture): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.idMenuItemCulture, item);
  }

  delete(id: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/menuItemCulture/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: string): Observable<MenuItemCulture> {
    const url = `${this.urlApi}/cg/menuItemCulture/${id}`;
    return this.httpClient.get<MenuItemCulture>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(idMenuItem: string): Observable<MenuItemCulture[]> {
    const url = `${this.urlApi}/cg/menuItemCulture/?idMenuItem=${idMenuItem}`;
    return this.httpClient.get<MenuItemCulture[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/cg/menuItemCulture/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
