import { Project4Mod6 } from './project4-mod6';
import { Category4Mod6 } from './category4-mod6';
import { Status4Mod6 } from './status4-mod6';
import { Severity4Mod6 } from './severity4-mod6';

export interface Issue4Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod6?: Project4Mod6;
  category4Mod6?: Category4Mod6;
  status4Mod6?: Status4Mod6;
  severity4Mod6?: Severity4Mod6;
}
