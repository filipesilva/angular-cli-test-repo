import { Project7Mod2 } from './project7-mod2';
import { Category7Mod2 } from './category7-mod2';
import { Status7Mod2 } from './status7-mod2';
import { Severity7Mod2 } from './severity7-mod2';

export interface Issue7Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod2?: Project7Mod2;
  category7Mod2?: Category7Mod2;
  status7Mod2?: Status7Mod2;
  severity7Mod2?: Severity7Mod2;
}
