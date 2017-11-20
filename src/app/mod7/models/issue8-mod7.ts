import { Project8Mod7 } from './project8-mod7';
import { Category8Mod7 } from './category8-mod7';
import { Status8Mod7 } from './status8-mod7';
import { Severity8Mod7 } from './severity8-mod7';

export interface Issue8Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod7?: Project8Mod7;
  category8Mod7?: Category8Mod7;
  status8Mod7?: Status8Mod7;
  severity8Mod7?: Severity8Mod7;
}
