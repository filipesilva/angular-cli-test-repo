import { Project7Mod6 } from './project7-mod6';
import { Category7Mod6 } from './category7-mod6';
import { Status7Mod6 } from './status7-mod6';
import { Severity7Mod6 } from './severity7-mod6';

export interface Issue7Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project7Mod6?: Project7Mod6;
  category7Mod6?: Category7Mod6;
  status7Mod6?: Status7Mod6;
  severity7Mod6?: Severity7Mod6;
}
