import { Project8Mod8 } from './project8-mod8';
import { Category8Mod8 } from './category8-mod8';
import { Status8Mod8 } from './status8-mod8';
import { Severity8Mod8 } from './severity8-mod8';

export interface Issue8Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project8Mod8?: Project8Mod8;
  category8Mod8?: Category8Mod8;
  status8Mod8?: Status8Mod8;
  severity8Mod8?: Severity8Mod8;
}
