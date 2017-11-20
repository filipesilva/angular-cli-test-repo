import { Project5Mod8 } from './project5-mod8';
import { Category5Mod8 } from './category5-mod8';
import { Status5Mod8 } from './status5-mod8';
import { Severity5Mod8 } from './severity5-mod8';

export interface Issue5Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project5Mod8?: Project5Mod8;
  category5Mod8?: Category5Mod8;
  status5Mod8?: Status5Mod8;
  severity5Mod8?: Severity5Mod8;
}
