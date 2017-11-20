import { Culture as CgCulture } from './../../cg/models/culture';
import { MenuItem } from './menu-item';

export interface MenuItemCulture {
  idMenuItemCulture: string;
  idCulture: string;
  idMenuItem: string;
  menuText: string;

  culture?: CgCulture;
  menuItem?: MenuItem;
}
