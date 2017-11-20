import { Project9Mod2 } from './project9-mod2';
import { Category9Mod2 } from './category9-mod2';
import { Status9Mod2 } from './status9-mod2';
import { Severity9Mod2 } from './severity9-mod2';

export interface Issue9Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod2?: Project9Mod2;
  category9Mod2?: Category9Mod2;
  status9Mod2?: Status9Mod2;
  severity9Mod2?: Severity9Mod2;
}
