import { Project2Mod8 } from './project2-mod8';
import { Category2Mod8 } from './category2-mod8';
import { Status2Mod8 } from './status2-mod8';
import { Severity2Mod8 } from './severity2-mod8';

export interface Issue2Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project2Mod8?: Project2Mod8;
  category2Mod8?: Category2Mod8;
  status2Mod8?: Status2Mod8;
  severity2Mod8?: Severity2Mod8;
}
