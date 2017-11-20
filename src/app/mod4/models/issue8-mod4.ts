import { Project8Mod4 } from './project8-mod4';
import { Category8Mod4 } from './category8-mod4';
import { Status8Mod4 } from './status8-mod4';
import { Severity8Mod4 } from './severity8-mod4';

export interface Issue8Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod4?: Project8Mod4;
  category8Mod4?: Category8Mod4;
  status8Mod4?: Status8Mod4;
  severity8Mod4?: Severity8Mod4;
}
