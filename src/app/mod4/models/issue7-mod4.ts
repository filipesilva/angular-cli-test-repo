import { Project7Mod4 } from './project7-mod4';
import { Category7Mod4 } from './category7-mod4';
import { Status7Mod4 } from './status7-mod4';
import { Severity7Mod4 } from './severity7-mod4';

export interface Issue7Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod4?: Project7Mod4;
  category7Mod4?: Category7Mod4;
  status7Mod4?: Status7Mod4;
  severity7Mod4?: Severity7Mod4;
}
