import { Project8Mod2 } from './project8-mod2';
import { Category8Mod2 } from './category8-mod2';
import { Status8Mod2 } from './status8-mod2';
import { Severity8Mod2 } from './severity8-mod2';

export interface Issue8Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod2?: Project8Mod2;
  category8Mod2?: Category8Mod2;
  status8Mod2?: Status8Mod2;
  severity8Mod2?: Severity8Mod2;
}
