import { Project5Mod9 } from './project5-mod9';
import { Category5Mod9 } from './category5-mod9';
import { Status5Mod9 } from './status5-mod9';
import { Severity5Mod9 } from './severity5-mod9';

export interface Issue5Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod9?: Project5Mod9;
  category5Mod9?: Category5Mod9;
  status5Mod9?: Status5Mod9;
  severity5Mod9?: Severity5Mod9;
}
