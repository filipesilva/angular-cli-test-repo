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

import { FileNotificationResult } from './../../shared/models/file-notification-result';
import { FileFormData } from './../../shared/models/file-form-data';
import { FileService } from './../../shared/services/file.service';
import { CommunicationService } from './../../shared/services/communication.service';

import { UserPhoto } from './../models/user-photo';

@Injectable()
export class UserPhotoService extends BaseService {

  constructor(
    private httpClient: HttpClient,
    helperService: HelperService,
    settingsService: SettingsService,
    private fileService: FileService,
    private communicationService: CommunicationService
  ) {
    super(helperService, settingsService);
  }

  post(item: UserPhoto): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/userPhoto`;
    return this.httpClient.post<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  put(id: string, item: UserPhoto): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/userPhoto/${id}`;
    return this.httpClient.put<NotificationResult>(url, item, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  save(newRecord: boolean, item: UserPhoto): Observable<NotificationResult> {
    if (newRecord) {
      return this.post(item);
    }
    return this.put(item.idUser, item);
  }

  delete(id: string): Observable<NotificationResult> {
    const url = `${this.urlApi}/cg/userPhoto/${id}`;
    return this.httpClient.delete<NotificationResult>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  getById(id: string): Observable<UserPhoto> {
    const url = `${this.urlApi}/cg/userPhoto/${id}`;
    return this.httpClient.get<UserPhoto>(url, { headers: this.getAuthHeaders() })
      .catch(err => super.handleError(err));
  }

  get(): Observable<UserPhoto[]> {
    const url = `${this.urlApi}/cg/userPhoto`;
    return this.httpClient.get<UserPhoto[]>(url, { headers: this.getAuthHeaders() })
      .catch(err => this.handleError(err));
  }

  page(gridParam: GridParameter): Observable<GridData> {
    const url = `${this.urlApi}/cg/userPhoto/page/${gridParam.urlParams}`;
    return this.httpClient.get<GridData>(url, { headers: this.getAuthHeaders(), params: gridParam.searchParams, observe: 'response' })
      .map(resp => {
        const pagination = JSON.parse(resp.headers.get('X-Pagination'));
        const data = resp.body;
        return { pagination: pagination, data: data };
      })
      .catch(err => this.handleError(err));
  }

  upload(id: string, name: string, fileFormData: FileFormData): Promise<FileNotificationResult> {
    const url = `${this.urlApi}/cg/userPhoto/upload/${id}/${name}`;
    this.fileService.getObserver()
      .subscribe(message => {
        this.communicationService.setUploadMessage(message);
      });
    return this.fileService.upload(url, fileFormData, this.getAuthHeaders());
  }

  download(id: string, name: string, fileName: string): void {
    const url = `${this.urlApi}/cg/userPhoto/download/${id}/${name}`;
    this.httpClient.get(url, { headers: this.getAuthHeaders(), responseType: 'blob' })
      .map(resp => {
        const blob: Blob = resp;
        this.fileService.download(blob, fileName);
      })
      .catch(err => this.handleError(err))
      .subscribe();
  }

}
