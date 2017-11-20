import { Project4Mod8 } from './project4-mod8';
import { Category4Mod8 } from './category4-mod8';
import { Status4Mod8 } from './status4-mod8';
import { Severity4Mod8 } from './severity4-mod8';

export interface Issue4Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project4Mod8?: Project4Mod8;
  category4Mod8?: Category4Mod8;
  status4Mod8?: Status4Mod8;
  severity4Mod8?: Severity4Mod8;
}
