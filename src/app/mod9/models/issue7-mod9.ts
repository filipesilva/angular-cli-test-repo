import { Project7Mod9 } from './project7-mod9';
import { Category7Mod9 } from './category7-mod9';
import { Status7Mod9 } from './status7-mod9';
import { Severity7Mod9 } from './severity7-mod9';

export interface Issue7Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod9?: Project7Mod9;
  category7Mod9?: Category7Mod9;
  status7Mod9?: Status7Mod9;
  severity7Mod9?: Severity7Mod9;
}
