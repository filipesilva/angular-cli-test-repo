import { Project8Mod9 } from './project8-mod9';
import { Category8Mod9 } from './category8-mod9';
import { Status8Mod9 } from './status8-mod9';
import { Severity8Mod9 } from './severity8-mod9';

export interface Issue8Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod9?: Project8Mod9;
  category8Mod9?: Category8Mod9;
  status8Mod9?: Status8Mod9;
  severity8Mod9?: Severity8Mod9;
}
