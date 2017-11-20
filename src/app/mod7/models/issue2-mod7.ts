import { Project2Mod7 } from './project2-mod7';
import { Category2Mod7 } from './category2-mod7';
import { Status2Mod7 } from './status2-mod7';
import { Severity2Mod7 } from './severity2-mod7';

export interface Issue2Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod7?: Project2Mod7;
  category2Mod7?: Category2Mod7;
  status2Mod7?: Status2Mod7;
  severity2Mod7?: Severity2Mod7;
}
