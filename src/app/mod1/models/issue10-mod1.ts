import { Project10Mod1 } from './project10-mod1';
import { Category10Mod1 } from './category10-mod1';
import { Status10Mod1 } from './status10-mod1';
import { Severity10Mod1 } from './severity10-mod1';

export interface Issue10Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project10Mod1?: Project10Mod1;
  category10Mod1?: Category10Mod1;
  status10Mod1?: Status10Mod1;
  severity10Mod1?: Severity10Mod1;
}
