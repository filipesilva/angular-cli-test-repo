import { Project5Mod2 } from './project5-mod2';
import { Category5Mod2 } from './category5-mod2';
import { Status5Mod2 } from './status5-mod2';
import { Severity5Mod2 } from './severity5-mod2';

export interface Issue5Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod2?: Project5Mod2;
  category5Mod2?: Category5Mod2;
  status5Mod2?: Status5Mod2;
  severity5Mod2?: Severity5Mod2;
}
