import { Project4Mod4 } from './project4-mod4';
import { Category4Mod4 } from './category4-mod4';
import { Status4Mod4 } from './status4-mod4';
import { Severity4Mod4 } from './severity4-mod4';

export interface Issue4Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod4?: Project4Mod4;
  category4Mod4?: Category4Mod4;
  status4Mod4?: Status4Mod4;
  severity4Mod4?: Severity4Mod4;
}
