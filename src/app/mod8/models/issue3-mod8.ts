import { Project3Mod8 } from './project3-mod8';
import { Category3Mod8 } from './category3-mod8';
import { Status3Mod8 } from './status3-mod8';
import { Severity3Mod8 } from './severity3-mod8';

export interface Issue3Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project3Mod8?: Project3Mod8;
  category3Mod8?: Category3Mod8;
  status3Mod8?: Status3Mod8;
  severity3Mod8?: Severity3Mod8;
}
