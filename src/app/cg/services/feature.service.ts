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

import { Feature } from './../models/feature';

@Injectable()
export class FeatureService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  post(item: Feature): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/feature`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: string, item: Feature): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/feature/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: Feature): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.idFeature, item);
  }

  delete(id: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/feature/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: string): Observable<Feature> {
    const url = `${this.urlApi}/cg/feature/${id}`;
    return this.httpClient.get<Feature>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<Feature[]> {
    const url = `${this.urlApi}/cg/feature`;
    return this.httpClient.get<Feature[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getSelectList(): Observable<IOption[]> {
    const url = `${this.urlApi}/cg/feature/selectList`;
    return this.httpClient.get<Feature[]>(url, { headers: this.getAuthHeaders() })
      .map(resp => {
        return resp.map(x => ({ value: x.idFeature.toString(), label: x.recursiveName }));
      })
      .catch(err => this.handleError(err));
  }

  getRecursive(): Observable<Feature[]> {
    const url = `${this.urlApi}/cg/feature/recursive`;
    return this.httpClient.get<Feature[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/cg/feature/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

}
