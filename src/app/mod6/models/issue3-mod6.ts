import { Project3Mod6 } from './project3-mod6';
import { Category3Mod6 } from './category3-mod6';
import { Status3Mod6 } from './status3-mod6';
import { Severity3Mod6 } from './severity3-mod6';

export interface Issue3Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod6?: Project3Mod6;
  category3Mod6?: Category3Mod6;
  status3Mod6?: Status3Mod6;
  severity3Mod6?: Severity3Mod6;
}
