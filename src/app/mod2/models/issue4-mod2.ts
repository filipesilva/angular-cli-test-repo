import { Project4Mod2 } from './project4-mod2';
import { Category4Mod2 } from './category4-mod2';
import { Status4Mod2 } from './status4-mod2';
import { Severity4Mod2 } from './severity4-mod2';

export interface Issue4Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod2?: Project4Mod2;
  category4Mod2?: Category4Mod2;
  status4Mod2?: Status4Mod2;
  severity4Mod2?: Severity4Mod2;
}
