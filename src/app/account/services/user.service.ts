import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { BaseService } from './../../shared/services/base.service';
import { HelperService } from './../../shared/services/helper.service';
import { SettingsService } from './../../shared/services/settings.service';
import { NotificationResult } from './../../shared/models/notification-result';

@Injectable()
export class UserService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService) {
    super(helperService, settingsService);
  }

  register(item: any): Observable<NotificationResult> {
    const url = `${this.urlApi}/account/register`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  resetPassword(email: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/account/resetPassword/${email}`;
    return this.httpClient.post<NotificationResult>(url, null, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  newPassword(item: any): Observable<NotificationResult> {
    const url = `${this.urlApi}/account/newPassword`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

}
