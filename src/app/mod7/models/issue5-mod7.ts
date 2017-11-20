import { Project5Mod7 } from './project5-mod7';
import { Category5Mod7 } from './category5-mod7';
import { Status5Mod7 } from './status5-mod7';
import { Severity5Mod7 } from './severity5-mod7';

export interface Issue5Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod7?: Project5Mod7;
  category5Mod7?: Category5Mod7;
  status5Mod7?: Status5Mod7;
  severity5Mod7?: Severity5Mod7;
}
