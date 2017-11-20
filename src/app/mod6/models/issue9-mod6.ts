import { Project9Mod6 } from './project9-mod6';
import { Category9Mod6 } from './category9-mod6';
import { Status9Mod6 } from './status9-mod6';
import { Severity9Mod6 } from './severity9-mod6';

export interface Issue9Mod6 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod6?: Project9Mod6;
  category9Mod6?: Category9Mod6;
  status9Mod6?: Status9Mod6;
  severity9Mod6?: Severity9Mod6;
}
