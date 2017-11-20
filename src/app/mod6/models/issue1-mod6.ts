import { Project1Mod6 } from './project1-mod6';
import { Category1Mod6 } from './category1-mod6';
import { Status1Mod6 } from './status1-mod6';
import { Severity1Mod6 } from './severity1-mod6';

export interface Issue1Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod6?: Project1Mod6;
  category1Mod6?: Category1Mod6;
  status1Mod6?: Status1Mod6;
  severity1Mod6?: Severity1Mod6;
}
