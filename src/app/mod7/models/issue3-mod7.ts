import { Project3Mod7 } from './project3-mod7';
import { Category3Mod7 } from './category3-mod7';
import { Status3Mod7 } from './status3-mod7';
import { Severity3Mod7 } from './severity3-mod7';

export interface Issue3Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod7?: Project3Mod7;
  category3Mod7?: Category3Mod7;
  status3Mod7?: Status3Mod7;
  severity3Mod7?: Severity3Mod7;
}
