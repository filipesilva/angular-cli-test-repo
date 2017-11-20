import { Project1Mod8 } from './project1-mod8';
import { Category1Mod8 } from './category1-mod8';
import { Status1Mod8 } from './status1-mod8';
import { Severity1Mod8 } from './severity1-mod8';

export interface Issue1Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod8?: Project1Mod8;
  category1Mod8?: Category1Mod8;
  status1Mod8?: Status1Mod8;
  severity1Mod8?: Severity1Mod8;
}
