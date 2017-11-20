import { Project6Mod2 } from './project6-mod2';
import { Category6Mod2 } from './category6-mod2';
import { Status6Mod2 } from './status6-mod2';
import { Severity6Mod2 } from './severity6-mod2';

export interface Issue6Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod2?: Project6Mod2;
  category6Mod2?: Category6Mod2;
  status6Mod2?: Status6Mod2;
  severity6Mod2?: Severity6Mod2;
}
