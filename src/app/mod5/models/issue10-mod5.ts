import { Project10Mod5 } from './project10-mod5';
import { Category10Mod5 } from './category10-mod5';
import { Status10Mod5 } from './status10-mod5';
import { Severity10Mod5 } from './severity10-mod5';

export interface Issue10Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod5?: Project10Mod5;
  category10Mod5?: Category10Mod5;
  status10Mod5?: Status10Mod5;
  severity10Mod5?: Severity10Mod5;
}
