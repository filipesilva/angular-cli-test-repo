import { Project1Mod10 } from './project1-mod10';
import { Category1Mod10 } from './category1-mod10';
import { Status1Mod10 } from './status1-mod10';
import { Severity1Mod10 } from './severity1-mod10';

export interface Issue1Mod10 {
  issueId: number;
  projectId: number;
  title: string;
  categoryId: number;
  statusId: number;
  severityId: number;
  description: string;

  project1Mod10?: Project1Mod10;
  category1Mod10?: Category1Mod10;
  status1Mod10?: Status1Mod10;
  severity1Mod10?: Severity1Mod10;
}
