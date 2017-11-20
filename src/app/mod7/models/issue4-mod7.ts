import { Project4Mod7 } from './project4-mod7';
import { Category4Mod7 } from './category4-mod7';
import { Status4Mod7 } from './status4-mod7';
import { Severity4Mod7 } from './severity4-mod7';

export interface Issue4Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod7?: Project4Mod7;
  category4Mod7?: Category4Mod7;
  status4Mod7?: Status4Mod7;
  severity4Mod7?: Severity4Mod7;
}
