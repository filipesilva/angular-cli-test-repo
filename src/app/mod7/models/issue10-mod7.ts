import { Project10Mod7 } from './project10-mod7';
import { Category10Mod7 } from './category10-mod7';
import { Status10Mod7 } from './status10-mod7';
import { Severity10Mod7 } from './severity10-mod7';

export interface Issue10Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod7?: Project10Mod7;
  category10Mod7?: Category10Mod7;
  status10Mod7?: Status10Mod7;
  severity10Mod7?: Severity10Mod7;
}
