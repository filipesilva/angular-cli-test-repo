import { User } from './user';

export interface UserPhoto {
  idUser: string;
  contentType?: string;
  fileName?: string;
  fileSize?: number;
  hasPhoto: boolean;

  user?: User;
}
