import { NotificationResult } from './notification-result';
import { FileFormData } from './../models/file-form-data';

export interface FileNotificationResult {
  result: NotificationResult;
  fileFormData: FileFormData;
}
