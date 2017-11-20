import { Project2Mod3 } from './project2-mod3';
import { Category2Mod3 } from './category2-mod3';
import { Status2Mod3 } from './status2-mod3';
import { Severity2Mod3 } from './severity2-mod3';

export interface Issue2Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod3?: Project2Mod3;
  category2Mod3?: Category2Mod3;
  status2Mod3?: Status2Mod3;
  severity2Mod3?: Severity2Mod3;
}
