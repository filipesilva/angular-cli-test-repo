import { Project9Mod3 } from './project9-mod3';
import { Category9Mod3 } from './category9-mod3';
import { Status9Mod3 } from './status9-mod3';
import { Severity9Mod3 } from './severity9-mod3';

export interface Issue9Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod3?: Project9Mod3;
  category9Mod3?: Category9Mod3;
  status9Mod3?: Status9Mod3;
  severity9Mod3?: Severity9Mod3;
}
