import { Project1Mod7 } from './project1-mod7';
import { Category1Mod7 } from './category1-mod7';
import { Status1Mod7 } from './status1-mod7';
import { Severity1Mod7 } from './severity1-mod7';

export interface Issue1Mod7 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod7?: Project1Mod7;
  category1Mod7?: Category1Mod7;
  status1Mod7?: Status1Mod7;
  severity1Mod7?: Severity1Mod7;
}
