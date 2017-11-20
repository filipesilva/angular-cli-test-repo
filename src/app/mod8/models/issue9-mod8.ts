import { Project9Mod8 } from './project9-mod8';
import { Category9Mod8 } from './category9-mod8';
import { Status9Mod8 } from './status9-mod8';
import { Severity9Mod8 } from './severity9-mod8';

export interface Issue9Mod8 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project9Mod8?: Project9Mod8;
  category9Mod8?: Category9Mod8;
  status9Mod8?: Status9Mod8;
  severity9Mod8?: Severity9Mod8;
}
