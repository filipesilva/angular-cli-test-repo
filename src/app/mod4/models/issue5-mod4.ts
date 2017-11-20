import { Project5Mod4 } from './project5-mod4';
import { Category5Mod4 } from './category5-mod4';
import { Status5Mod4 } from './status5-mod4';
import { Severity5Mod4 } from './severity5-mod4';

export interface Issue5Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod4?: Project5Mod4;
  category5Mod4?: Category5Mod4;
  status5Mod4?: Status5Mod4;
  severity5Mod4?: Severity5Mod4;
}
