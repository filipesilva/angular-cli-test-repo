import { Project1Mod3 } from './project1-mod3';
import { Category1Mod3 } from './category1-mod3';
import { Status1Mod3 } from './status1-mod3';
import { Severity1Mod3 } from './severity1-mod3';

export interface Issue1Mod3 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod3?: Project1Mod3;
  category1Mod3?: Category1Mod3;
  status1Mod3?: Status1Mod3;
  severity1Mod3?: Severity1Mod3;
}
