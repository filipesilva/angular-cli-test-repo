import { Project3Mod9 } from './project3-mod9';
import { Category3Mod9 } from './category3-mod9';
import { Status3Mod9 } from './status3-mod9';
import { Severity3Mod9 } from './severity3-mod9';

export interface Issue3Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod9?: Project3Mod9;
  category3Mod9?: Category3Mod9;
  status3Mod9?: Status3Mod9;
  severity3Mod9?: Severity3Mod9;
}
