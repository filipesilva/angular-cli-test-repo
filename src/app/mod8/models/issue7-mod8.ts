import { Project7Mod8 } from './project7-mod8';
import { Category7Mod8 } from './category7-mod8';
import { Status7Mod8 } from './status7-mod8';
import { Severity7Mod8 } from './severity7-mod8';

export interface Issue7Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod8?: Project7Mod8;
  category7Mod8?: Category7Mod8;
  status7Mod8?: Status7Mod8;
  severity7Mod8?: Severity7Mod8;
}
