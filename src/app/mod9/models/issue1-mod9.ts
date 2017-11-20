import { Project1Mod9 } from './project1-mod9';
import { Category1Mod9 } from './category1-mod9';
import { Status1Mod9 } from './status1-mod9';
import { Severity1Mod9 } from './severity1-mod9';

export interface Issue1Mod9 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod9?: Project1Mod9;
  category1Mod9?: Category1Mod9;
  status1Mod9?: Status1Mod9;
  severity1Mod9?: Severity1Mod9;
}
