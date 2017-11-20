import { Project8Mod3 } from './project8-mod3';
import { Category8Mod3 } from './category8-mod3';
import { Status8Mod3 } from './status8-mod3';
import { Severity8Mod3 } from './severity8-mod3';

export interface Issue8Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod3?: Project8Mod3;
  category8Mod3?: Category8Mod3;
  status8Mod3?: Status8Mod3;
  severity8Mod3?: Severity8Mod3;
}
