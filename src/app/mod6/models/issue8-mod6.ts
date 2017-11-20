import { Project8Mod6 } from './project8-mod6';
import { Category8Mod6 } from './category8-mod6';
import { Status8Mod6 } from './status8-mod6';
import { Severity8Mod6 } from './severity8-mod6';

export interface Issue8Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod6?: Project8Mod6;
  category8Mod6?: Category8Mod6;
  status8Mod6?: Status8Mod6;
  severity8Mod6?: Severity8Mod6;
}
