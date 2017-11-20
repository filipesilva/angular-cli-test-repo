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

import { Authorization } from './../models/authorization';

@Injectable()
export class AuthorizationService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  savePermissionsByRole(idRole: string, items: any[]): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/authorization/permissionsByRole/${idRole}`;
    return this.httpClient.post<NotificationResult>(url, items, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getPermissionsByRole(idRole: string): Observable<any[]> {
    const url = `${this.urlApi}/cg/authorization/permissionsByRole/${idRole}`;
    return this.httpClient.get<Authorization[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

}
