import { Project3Mod3 } from './project3-mod3';
import { Category3Mod3 } from './category3-mod3';
import { Status3Mod3 } from './status3-mod3';
import { Severity3Mod3 } from './severity3-mod3';

export interface Issue3Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod3?: Project3Mod3;
  category3Mod3?: Category3Mod3;
  status3Mod3?: Status3Mod3;
  severity3Mod3?: Severity3Mod3;
}
