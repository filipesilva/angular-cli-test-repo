import { Project3Mod2 } from './project3-mod2';
import { Category3Mod2 } from './category3-mod2';
import { Status3Mod2 } from './status3-mod2';
import { Severity3Mod2 } from './severity3-mod2';

export interface Issue3Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod2?: Project3Mod2;
  category3Mod2?: Category3Mod2;
  status3Mod2?: Status3Mod2;
  severity3Mod2?: Severity3Mod2;
}
