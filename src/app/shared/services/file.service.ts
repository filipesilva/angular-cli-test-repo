import { Component, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TranslateService } from '@ngx-translate/core';
import { FileFormData } from './../models/file-form-data';
import { FileNotificationResult } from './../models/file-notification-result';

@Injectable()
export class FileService {

  private progress$: Observable<string>;
  private progress = 0;
  private progressObserver: any;

  private static setUploadUpdateInterval(interval: number): void {
    setInterval(() => { }, interval);
  }

  constructor(
    private translateService: TranslateService) {
    this.progress$ = new Observable<string>(observer => {
      this.progressObserver = observer;
    });
  }

  public getObserver(): Observable<string> {
    return this.progress$;
  }

  public upload(url: string, fileFormData: FileFormData, headers: HttpHeaders): Promise<FileNotificationResult> {
    const formData = fileFormData.formData;
    return new Promise((resolve, reject) => {
      const xhr: XMLHttpRequest = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const result = JSON.parse(xhr.response);
            resolve({ result: result, fileFormData: fileFormData });
          } else {
            reject(xhr.response);
          }
        }
      };

      FileService.setUploadUpdateInterval(100);

      xhr.upload.onprogress = (event) => {
        let msg = '';
        this.progress = Math.round(event.loaded / event.total * 100);

        if (fileFormData.fileName) {
          if (this.progress < 1) {
            msg = this.translateService.instant('shared.input.file.sending', { v1: fileFormData.fileName });
          } else if (this.progress === 100) {
            msg = this.translateService.instant('shared.input.file.saving', { v1: fileFormData.fileName });
          } else {
            msg = fileFormData.fileName + ': ' + this.progress + '%';
          }

          this.progressObserver.next(msg);
        }
      };

      xhr.open('POST', url, true);

      if (headers.has('Authorization')) {
        xhr.setRequestHeader('Authorization', headers.get('Authorization'));
      }

      xhr.send(formData);
    });
  }

  public download(blob: Blob, fileName: string) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

}
