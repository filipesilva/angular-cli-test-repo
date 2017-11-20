import { Project7Mod5 } from './project7-mod5';
import { Category7Mod5 } from './category7-mod5';
import { Status7Mod5 } from './status7-mod5';
import { Severity7Mod5 } from './severity7-mod5';

export interface Issue7Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod5?: Project7Mod5;
  category7Mod5?: Category7Mod5;
  status7Mod5?: Status7Mod5;
  severity7Mod5?: Severity7Mod5;
}
