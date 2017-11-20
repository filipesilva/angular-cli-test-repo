import { Project6Mod7 } from './project6-mod7';
import { Category6Mod7 } from './category6-mod7';
import { Status6Mod7 } from './status6-mod7';
import { Severity6Mod7 } from './severity6-mod7';

export interface Issue6Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod7?: Project6Mod7;
  category6Mod7?: Category6Mod7;
  status6Mod7?: Status6Mod7;
  severity6Mod7?: Severity6Mod7;
}
