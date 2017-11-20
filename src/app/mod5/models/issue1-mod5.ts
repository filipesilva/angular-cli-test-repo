import { Project1Mod5 } from './project1-mod5';
import { Category1Mod5 } from './category1-mod5';
import { Status1Mod5 } from './status1-mod5';
import { Severity1Mod5 } from './severity1-mod5';

export interface Issue1Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod5?: Project1Mod5;
  category1Mod5?: Category1Mod5;
  status1Mod5?: Status1Mod5;
  severity1Mod5?: Severity1Mod5;
}
