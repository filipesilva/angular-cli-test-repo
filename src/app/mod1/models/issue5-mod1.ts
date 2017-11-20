import { Project5Mod1 } from './project5-mod1';
import { Category5Mod1 } from './category5-mod1';
import { Status5Mod1 } from './status5-mod1';
import { Severity5Mod1 } from './severity5-mod1';

export interface Issue5Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod1?: Project5Mod1;
  category5Mod1?: Category5Mod1;
  status5Mod1?: Status5Mod1;
  severity5Mod1?: Severity5Mod1;
}
