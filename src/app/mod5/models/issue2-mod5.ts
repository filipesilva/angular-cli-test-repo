import { Project2Mod5 } from './project2-mod5';
import { Category2Mod5 } from './category2-mod5';
import { Status2Mod5 } from './status2-mod5';
import { Severity2Mod5 } from './severity2-mod5';

export interface Issue2Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod5?: Project2Mod5;
  category2Mod5?: Category2Mod5;
  status2Mod5?: Status2Mod5;
  severity2Mod5?: Severity2Mod5;
}
