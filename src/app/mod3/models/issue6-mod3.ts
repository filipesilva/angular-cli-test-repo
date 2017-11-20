import { Project6Mod3 } from './project6-mod3';
import { Category6Mod3 } from './category6-mod3';
import { Status6Mod3 } from './status6-mod3';
import { Severity6Mod3 } from './severity6-mod3';

export interface Issue6Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod3?: Project6Mod3;
  category6Mod3?: Category6Mod3;
  status6Mod3?: Status6Mod3;
  severity6Mod3?: Severity6Mod3;
}
