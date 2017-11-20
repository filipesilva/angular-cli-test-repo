import { Project7Mod10 } from './project7-mod10';
import { Category7Mod10 } from './category7-mod10';
import { Status7Mod10 } from './status7-mod10';
import { Severity7Mod10 } from './severity7-mod10';

export interface Issue7Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod10?: Project7Mod10;
  category7Mod10?: Category7Mod10;
  status7Mod10?: Status7Mod10;
  severity7Mod10?: Severity7Mod10;
}
