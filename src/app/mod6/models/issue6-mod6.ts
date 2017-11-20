import { Project6Mod6 } from './project6-mod6';
import { Category6Mod6 } from './category6-mod6';
import { Status6Mod6 } from './status6-mod6';
import { Severity6Mod6 } from './severity6-mod6';

export interface Issue6Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod6?: Project6Mod6;
  category6Mod6?: Category6Mod6;
  status6Mod6?: Status6Mod6;
  severity6Mod6?: Severity6Mod6;
}
