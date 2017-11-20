import { Project9Mod9 } from './project9-mod9';
import { Category9Mod9 } from './category9-mod9';
import { Status9Mod9 } from './status9-mod9';
import { Severity9Mod9 } from './severity9-mod9';

export interface Issue9Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod9?: Project9Mod9;
  category9Mod9?: Category9Mod9;
  status9Mod9?: Status9Mod9;
  severity9Mod9?: Severity9Mod9;
}
