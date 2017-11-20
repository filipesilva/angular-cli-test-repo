import { Project6Mod10 } from './project6-mod10';
import { Category6Mod10 } from './category6-mod10';
import { Status6Mod10 } from './status6-mod10';
import { Severity6Mod10 } from './severity6-mod10';

export interface Issue6Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod10?: Project6Mod10;
  category6Mod10?: Category6Mod10;
  status6Mod10?: Status6Mod10;
  severity6Mod10?: Severity6Mod10;
}
