import { Project5Mod3 } from './project5-mod3';
import { Category5Mod3 } from './category5-mod3';
import { Status5Mod3 } from './status5-mod3';
import { Severity5Mod3 } from './severity5-mod3';

export interface Issue5Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod3?: Project5Mod3;
  category5Mod3?: Category5Mod3;
  status5Mod3?: Status5Mod3;
  severity5Mod3?: Severity5Mod3;
}
