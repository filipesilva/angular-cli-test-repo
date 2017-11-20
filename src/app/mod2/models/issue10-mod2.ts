import { Project10Mod2 } from './project10-mod2';
import { Category10Mod2 } from './category10-mod2';
import { Status10Mod2 } from './status10-mod2';
import { Severity10Mod2 } from './severity10-mod2';

export interface Issue10Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod2?: Project10Mod2;
  category10Mod2?: Category10Mod2;
  status10Mod2?: Status10Mod2;
  severity10Mod2?: Severity10Mod2;
}
