import { Project7Mod7 } from './project7-mod7';
import { Category7Mod7 } from './category7-mod7';
import { Status7Mod7 } from './status7-mod7';
import { Severity7Mod7 } from './severity7-mod7';

export interface Issue7Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod7?: Project7Mod7;
  category7Mod7?: Category7Mod7;
  status7Mod7?: Status7Mod7;
  severity7Mod7?: Severity7Mod7;
}
