import { Project2Mod9 } from './project2-mod9';
import { Category2Mod9 } from './category2-mod9';
import { Status2Mod9 } from './status2-mod9';
import { Severity2Mod9 } from './severity2-mod9';

export interface Issue2Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod9?: Project2Mod9;
  category2Mod9?: Category2Mod9;
  status2Mod9?: Status2Mod9;
  severity2Mod9?: Severity2Mod9;
}
