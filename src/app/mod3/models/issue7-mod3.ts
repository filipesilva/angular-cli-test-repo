import { Project7Mod3 } from './project7-mod3';
import { Category7Mod3 } from './category7-mod3';
import { Status7Mod3 } from './status7-mod3';
import { Severity7Mod3 } from './severity7-mod3';

export interface Issue7Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod3?: Project7Mod3;
  category7Mod3?: Category7Mod3;
  status7Mod3?: Status7Mod3;
  severity7Mod3?: Severity7Mod3;
}
