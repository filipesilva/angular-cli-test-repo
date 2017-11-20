import { Feature } from './feature';
import { Role } from './role';

export interface Authorization {
  idAuthorization: string;
  authorized: boolean;
  idFeature: string;
  idRole: string;

  feature?: Feature;
  role?: Role;
}
