import { Project4Mod5 } from './project4-mod5';
import { Category4Mod5 } from './category4-mod5';
import { Status4Mod5 } from './status4-mod5';
import { Severity4Mod5 } from './severity4-mod5';

export interface Issue4Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod5?: Project4Mod5;
  category4Mod5?: Category4Mod5;
  status4Mod5?: Status4Mod5;
  severity4Mod5?: Severity4Mod5;
}
