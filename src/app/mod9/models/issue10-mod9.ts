import { Project10Mod9 } from './project10-mod9';
import { Category10Mod9 } from './category10-mod9';
import { Status10Mod9 } from './status10-mod9';
import { Severity10Mod9 } from './severity10-mod9';

export interface Issue10Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod9?: Project10Mod9;
  category10Mod9?: Category10Mod9;
  status10Mod9?: Status10Mod9;
  severity10Mod9?: Severity10Mod9;
}
