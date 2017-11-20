import { Project9Mod4 } from './project9-mod4';
import { Category9Mod4 } from './category9-mod4';
import { Status9Mod4 } from './status9-mod4';
import { Severity9Mod4 } from './severity9-mod4';

export interface Issue9Mod4 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod4?: Project9Mod4;
  category9Mod4?: Category9Mod4;
  status9Mod4?: Status9Mod4;
  severity9Mod4?: Severity9Mod4;
}
