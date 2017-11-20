import { Project10Mod4 } from './project10-mod4';
import { Category10Mod4 } from './category10-mod4';
import { Status10Mod4 } from './status10-mod4';
import { Severity10Mod4 } from './severity10-mod4';

export interface Issue10Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod4?: Project10Mod4;
  category10Mod4?: Category10Mod4;
  status10Mod4?: Status10Mod4;
  severity10Mod4?: Severity10Mod4;
}
