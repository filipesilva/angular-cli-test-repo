import { Project9Mod1 } from './project9-mod1';
import { Category9Mod1 } from './category9-mod1';
import { Status9Mod1 } from './status9-mod1';
import { Severity9Mod1 } from './severity9-mod1';

export interface Issue9Mod1 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod1?: Project9Mod1;
  category9Mod1?: Category9Mod1;
  status9Mod1?: Status9Mod1;
  severity9Mod1?: Severity9Mod1;
}
