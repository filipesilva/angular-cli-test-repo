import { Project2Mod6 } from './project2-mod6';
import { Category2Mod6 } from './category2-mod6';
import { Status2Mod6 } from './status2-mod6';
import { Severity2Mod6 } from './severity2-mod6';

export interface Issue2Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod6?: Project2Mod6;
  category2Mod6?: Category2Mod6;
  status2Mod6?: Status2Mod6;
  severity2Mod6?: Severity2Mod6;
}
