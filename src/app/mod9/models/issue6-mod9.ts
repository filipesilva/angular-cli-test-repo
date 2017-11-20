import { Project6Mod9 } from './project6-mod9';
import { Category6Mod9 } from './category6-mod9';
import { Status6Mod9 } from './status6-mod9';
import { Severity6Mod9 } from './severity6-mod9';

export interface Issue6Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod9?: Project6Mod9;
  category6Mod9?: Category6Mod9;
  status6Mod9?: Status6Mod9;
  severity6Mod9?: Severity6Mod9;
}
