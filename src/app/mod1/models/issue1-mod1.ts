import { Project1Mod1 } from './project1-mod1';
import { Category1Mod1 } from './category1-mod1';
import { Status1Mod1 } from './status1-mod1';
import { Severity1Mod1 } from './severity1-mod1';

export interface Issue1Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod1?: Project1Mod1;
  category1Mod1?: Category1Mod1;
  status1Mod1?: Status1Mod1;
  severity1Mod1?: Severity1Mod1;
}
