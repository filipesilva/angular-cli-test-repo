import { Project1Mod2 } from './project1-mod2';
import { Category1Mod2 } from './category1-mod2';
import { Status1Mod2 } from './status1-mod2';
import { Severity1Mod2 } from './severity1-mod2';

export interface Issue1Mod2 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod2?: Project1Mod2;
  category1Mod2?: Category1Mod2;
  status1Mod2?: Status1Mod2;
  severity1Mod2?: Severity1Mod2;
}
