import { Project6Mod5 } from './project6-mod5';
import { Category6Mod5 } from './category6-mod5';
import { Status6Mod5 } from './status6-mod5';
import { Severity6Mod5 } from './severity6-mod5';

export interface Issue6Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod5?: Project6Mod5;
  category6Mod5?: Category6Mod5;
  status6Mod5?: Status6Mod5;
  severity6Mod5?: Severity6Mod5;
}
