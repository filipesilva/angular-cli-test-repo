import { Project8Mod5 } from './project8-mod5';
import { Category8Mod5 } from './category8-mod5';
import { Status8Mod5 } from './status8-mod5';
import { Severity8Mod5 } from './severity8-mod5';

export interface Issue8Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod5?: Project8Mod5;
  category8Mod5?: Category8Mod5;
  status8Mod5?: Status8Mod5;
  severity8Mod5?: Severity8Mod5;
}
