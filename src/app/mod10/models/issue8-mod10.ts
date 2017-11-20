import { Project8Mod10 } from './project8-mod10';
import { Category8Mod10 } from './category8-mod10';
import { Status8Mod10 } from './status8-mod10';
import { Severity8Mod10 } from './severity8-mod10';

export interface Issue8Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod10?: Project8Mod10;
  category8Mod10?: Category8Mod10;
  status8Mod10?: Status8Mod10;
  severity8Mod10?: Severity8Mod10;
}
