import { Project9Mod7 } from './project9-mod7';
import { Category9Mod7 } from './category9-mod7';
import { Status9Mod7 } from './status9-mod7';
import { Severity9Mod7 } from './severity9-mod7';

export interface Issue9Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod7?: Project9Mod7;
  category9Mod7?: Category9Mod7;
  status9Mod7?: Status9Mod7;
  severity9Mod7?: Severity9Mod7;
}
