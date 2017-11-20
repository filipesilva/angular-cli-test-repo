import { Project2Mod10 } from './project2-mod10';
import { Category2Mod10 } from './category2-mod10';
import { Status2Mod10 } from './status2-mod10';
import { Severity2Mod10 } from './severity2-mod10';

export interface Issue2Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod10?: Project2Mod10;
  category2Mod10?: Category2Mod10;
  status2Mod10?: Status2Mod10;
  severity2Mod10?: Severity2Mod10;
}
