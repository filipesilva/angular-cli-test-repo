import { Project3Mod1 } from './project3-mod1';
import { Category3Mod1 } from './category3-mod1';
import { Status3Mod1 } from './status3-mod1';
import { Severity3Mod1 } from './severity3-mod1';

export interface Issue3Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod1?: Project3Mod1;
  category3Mod1?: Category3Mod1;
  status3Mod1?: Status3Mod1;
  severity3Mod1?: Severity3Mod1;
}
