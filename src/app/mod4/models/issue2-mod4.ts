import { Project2Mod4 } from './project2-mod4';
import { Category2Mod4 } from './category2-mod4';
import { Status2Mod4 } from './status2-mod4';
import { Severity2Mod4 } from './severity2-mod4';

export interface Issue2Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod4?: Project2Mod4;
  category2Mod4?: Category2Mod4;
  status2Mod4?: Status2Mod4;
  severity2Mod4?: Severity2Mod4;
}
