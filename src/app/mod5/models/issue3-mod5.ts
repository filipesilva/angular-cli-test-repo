import { Project3Mod5 } from './project3-mod5';
import { Category3Mod5 } from './category3-mod5';
import { Status3Mod5 } from './status3-mod5';
import { Severity3Mod5 } from './severity3-mod5';

export interface Issue3Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod5?: Project3Mod5;
  category3Mod5?: Category3Mod5;
  status3Mod5?: Status3Mod5;
  severity3Mod5?: Severity3Mod5;
}
