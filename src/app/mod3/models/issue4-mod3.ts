import { Project4Mod3 } from './project4-mod3';
import { Category4Mod3 } from './category4-mod3';
import { Status4Mod3 } from './status4-mod3';
import { Severity4Mod3 } from './severity4-mod3';

export interface Issue4Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod3?: Project4Mod3;
  category4Mod3?: Category4Mod3;
  status4Mod3?: Status4Mod3;
  severity4Mod3?: Severity4Mod3;
}
