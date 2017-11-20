import { Project6Mod1 } from './project6-mod1';
import { Category6Mod1 } from './category6-mod1';
import { Status6Mod1 } from './status6-mod1';
import { Severity6Mod1 } from './severity6-mod1';

export interface Issue6Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod1?: Project6Mod1;
  category6Mod1?: Category6Mod1;
  status6Mod1?: Status6Mod1;
  severity6Mod1?: Severity6Mod1;
}
