import { Project6Mod4 } from './project6-mod4';
import { Category6Mod4 } from './category6-mod4';
import { Status6Mod4 } from './status6-mod4';
import { Severity6Mod4 } from './severity6-mod4';

export interface Issue6Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod4?: Project6Mod4;
  category6Mod4?: Category6Mod4;
  status6Mod4?: Status6Mod4;
  severity6Mod4?: Severity6Mod4;
}
