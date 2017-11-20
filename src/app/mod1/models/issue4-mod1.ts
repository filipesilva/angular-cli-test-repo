import { Project4Mod1 } from './project4-mod1';
import { Category4Mod1 } from './category4-mod1';
import { Status4Mod1 } from './status4-mod1';
import { Severity4Mod1 } from './severity4-mod1';

export interface Issue4Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod1?: Project4Mod1;
  category4Mod1?: Category4Mod1;
  status4Mod1?: Status4Mod1;
  severity4Mod1?: Severity4Mod1;
}
