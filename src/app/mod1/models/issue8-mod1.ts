import { Project8Mod1 } from './project8-mod1';
import { Category8Mod1 } from './category8-mod1';
import { Status8Mod1 } from './status8-mod1';
import { Severity8Mod1 } from './severity8-mod1';

export interface Issue8Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod1?: Project8Mod1;
  category8Mod1?: Category8Mod1;
  status8Mod1?: Status8Mod1;
  severity8Mod1?: Severity8Mod1;
}
