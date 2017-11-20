import { Project6Mod8 } from './project6-mod8';
import { Category6Mod8 } from './category6-mod8';
import { Status6Mod8 } from './status6-mod8';
import { Severity6Mod8 } from './severity6-mod8';

export interface Issue6Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project6Mod8?: Project6Mod8;
  category6Mod8?: Category6Mod8;
  status6Mod8?: Status6Mod8;
  severity6Mod8?: Severity6Mod8;
}
