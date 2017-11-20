import { Project5Mod6 } from './project5-mod6';
import { Category5Mod6 } from './category5-mod6';
import { Status5Mod6 } from './status5-mod6';
import { Severity5Mod6 } from './severity5-mod6';

export interface Issue5Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod6?: Project5Mod6;
  category5Mod6?: Category5Mod6;
  status5Mod6?: Status5Mod6;
  severity5Mod6?: Severity5Mod6;
}
