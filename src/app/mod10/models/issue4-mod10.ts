import { Project4Mod10 } from './project4-mod10';
import { Category4Mod10 } from './category4-mod10';
import { Status4Mod10 } from './status4-mod10';
import { Severity4Mod10 } from './severity4-mod10';

export interface Issue4Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod10?: Project4Mod10;
  category4Mod10?: Category4Mod10;
  status4Mod10?: Status4Mod10;
  severity4Mod10?: Severity4Mod10;
}
