import { Project1Mod4 } from './project1-mod4';
import { Category1Mod4 } from './category1-mod4';
import { Status1Mod4 } from './status1-mod4';
import { Severity1Mod4 } from './severity1-mod4';

export interface Issue1Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod4?: Project1Mod4;
  category1Mod4?: Category1Mod4;
  status1Mod4?: Status1Mod4;
  severity1Mod4?: Severity1Mod4;
}
