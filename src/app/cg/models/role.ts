import { User } from './user';

export interface Role {
  idRole: string;
  description?: string;
  enabled: boolean;
  roleName: string;

  users?: User[];
}
