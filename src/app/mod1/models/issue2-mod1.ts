import { Project2Mod1 } from './project2-mod1';
import { Category2Mod1 } from './category2-mod1';
import { Status2Mod1 } from './status2-mod1';
import { Severity2Mod1 } from './severity2-mod1';

export interface Issue2Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod1?: Project2Mod1;
  category2Mod1?: Category2Mod1;
  status2Mod1?: Status2Mod1;
  severity2Mod1?: Severity2Mod1;
}
