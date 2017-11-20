import { Project9Mod5 } from './project9-mod5';
import { Category9Mod5 } from './category9-mod5';
import { Status9Mod5 } from './status9-mod5';
import { Severity9Mod5 } from './severity9-mod5';

export interface Issue9Mod5 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod5?: Project9Mod5;
  category9Mod5?: Category9Mod5;
  status9Mod5?: Status9Mod5;
  severity9Mod5?: Severity9Mod5;
}
