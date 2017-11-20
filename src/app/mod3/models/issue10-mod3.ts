import { Project10Mod3 } from './project10-mod3';
import { Category10Mod3 } from './category10-mod3';
import { Status10Mod3 } from './status10-mod3';
import { Severity10Mod3 } from './severity10-mod3';

export interface Issue10Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod3?: Project10Mod3;
  category10Mod3?: Category10Mod3;
  status10Mod3?: Status10Mod3;
  severity10Mod3?: Severity10Mod3;
}
