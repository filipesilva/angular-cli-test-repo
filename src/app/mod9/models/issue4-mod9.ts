import { Project4Mod9 } from './project4-mod9';
import { Category4Mod9 } from './category4-mod9';
import { Status4Mod9 } from './status4-mod9';
import { Severity4Mod9 } from './severity4-mod9';

export interface Issue4Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod9?: Project4Mod9;
  category4Mod9?: Category4Mod9;
  status4Mod9?: Status4Mod9;
  severity4Mod9?: Severity4Mod9;
}
