import { Project3Mod10 } from './project3-mod10';
import { Category3Mod10 } from './category3-mod10';
import { Status3Mod10 } from './status3-mod10';
import { Severity3Mod10 } from './severity3-mod10';

export interface Issue3Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod10?: Project3Mod10;
  category3Mod10?: Category3Mod10;
  status3Mod10?: Status3Mod10;
  severity3Mod10?: Severity3Mod10;
}
