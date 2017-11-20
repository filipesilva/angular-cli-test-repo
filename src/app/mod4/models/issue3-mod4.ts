import { Project3Mod4 } from './project3-mod4';
import { Category3Mod4 } from './category3-mod4';
import { Status3Mod4 } from './status3-mod4';
import { Severity3Mod4 } from './severity3-mod4';

export interface Issue3Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod4?: Project3Mod4;
  category3Mod4?: Category3Mod4;
  status3Mod4?: Status3Mod4;
  severity3Mod4?: Severity3Mod4;
}
