import { Role } from './role';

export interface User {

  idUser: string;
  blocked: boolean;
  creationDate: Date;
  email: string;
  emailConfirmed: boolean;
  enabled: boolean;
  firstName: string;
  invalidLogonAmount: number;
  lastActionDate?: Date;
  lastName?: string;
  logonDate?: Date;
  password?: string;
  securityKey?: string;
  username: string;

  readonly fullName: string;
  roles?: Role[];
}
