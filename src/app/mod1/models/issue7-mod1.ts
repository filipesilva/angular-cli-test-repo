import { Project7Mod1 } from './project7-mod1';
import { Category7Mod1 } from './category7-mod1';
import { Status7Mod1 } from './status7-mod1';
import { Severity7Mod1 } from './severity7-mod1';

export interface Issue7Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod1?: Project7Mod1;
  category7Mod1?: Category7Mod1;
  status7Mod1?: Status7Mod1;
  severity7Mod1?: Severity7Mod1;
}
