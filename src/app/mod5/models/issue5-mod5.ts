import { Project5Mod5 } from './project5-mod5';
import { Category5Mod5 } from './category5-mod5';
import { Status5Mod5 } from './status5-mod5';
import { Severity5Mod5 } from './severity5-mod5';

export interface Issue5Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod5?: Project5Mod5;
  category5Mod5?: Category5Mod5;
  status5Mod5?: Status5Mod5;
  severity5Mod5?: Severity5Mod5;
}
