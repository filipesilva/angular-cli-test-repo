import { Project9Mod10 } from './project9-mod10';
import { Category9Mod10 } from './category9-mod10';
import { Status9Mod10 } from './status9-mod10';
import { Severity9Mod10 } from './severity9-mod10';

export interface Issue9Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod10?: Project9Mod10;
  category9Mod10?: Category9Mod10;
  status9Mod10?: Status9Mod10;
  severity9Mod10?: Severity9Mod10;
}
