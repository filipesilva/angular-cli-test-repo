import { Project10Mod8 } from './project10-mod8';
import { Category10Mod8 } from './category10-mod8';
import { Status10Mod8 } from './status10-mod8';
import { Severity10Mod8 } from './severity10-mod8';

export interface Issue10Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod8?: Project10Mod8;
  category10Mod8?: Category10Mod8;
  status10Mod8?: Status10Mod8;
  severity10Mod8?: Severity10Mod8;
}
