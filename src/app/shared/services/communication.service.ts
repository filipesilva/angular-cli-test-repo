import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {

  private _uploadMessage: string;
  private _uploadMessageType: string;

  get uploadMessage(): string {
    return this._uploadMessage;
  }

  get uploadMessageType(): string {
    if (this._uploadMessageType) {
      return 'alert-' + this._uploadMessageType;
    }

    return '';
  }

  setUploadMessage(message: string = null, messageType: string = null) {
    this._uploadMessage = message;
    this._uploadMessageType = messageType;
  }

}
