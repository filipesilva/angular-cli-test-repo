import { Project10Mod10 } from './project10-mod10';
import { Category10Mod10 } from './category10-mod10';
import { Status10Mod10 } from './status10-mod10';
import { Severity10Mod10 } from './severity10-mod10';

export interface Issue10Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod10?: Project10Mod10;
  category10Mod10?: Category10Mod10;
  status10Mod10?: Status10Mod10;
  severity10Mod10?: Severity10Mod10;
}
