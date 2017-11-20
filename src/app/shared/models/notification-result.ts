import { NotificationMessage } from './notification-message';
import { NotificationError } from './notification-error';

export interface NotificationResult {
  isValid: boolean;
  errors: NotificationError[];
  messages: NotificationMessage[];
  data: any;
}
