import { Project2Mod2 } from './project2-mod2';
import { Category2Mod2 } from './category2-mod2';
import { Status2Mod2 } from './status2-mod2';
import { Severity2Mod2 } from './severity2-mod2';

export interface Issue2Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod2?: Project2Mod2;
  category2Mod2?: Category2Mod2;
  status2Mod2?: Status2Mod2;
  severity2Mod2?: Severity2Mod2;
}
