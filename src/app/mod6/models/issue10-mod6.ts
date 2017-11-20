import { Project10Mod6 } from './project10-mod6';
import { Category10Mod6 } from './category10-mod6';
import { Status10Mod6 } from './status10-mod6';
import { Severity10Mod6 } from './severity10-mod6';

export interface Issue10Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod6?: Project10Mod6;
  category10Mod6?: Category10Mod6;
  status10Mod6?: Status10Mod6;
  severity10Mod6?: Severity10Mod6;
}
