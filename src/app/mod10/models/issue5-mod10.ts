import { Project5Mod10 } from './project5-mod10';
import { Category5Mod10 } from './category5-mod10';
import { Status5Mod10 } from './status5-mod10';
import { Severity5Mod10 } from './severity5-mod10';

export interface Issue5Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod10?: Project5Mod10;
  category5Mod10?: Category5Mod10;
  status5Mod10?: Status5Mod10;
  severity5Mod10?: Severity5Mod10;
}
