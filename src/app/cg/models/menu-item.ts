export interface MenuItem {
  idMenuItem: string;
  authenticated: boolean;
  checkPermission: boolean;
  cssClass?: string;
  enabled: boolean;
  featureKey?: string;
  groupName?: string;
  idMenuItemParent?: string;
  menuOrder?: number;
  menuText: string;
  url?: string;
  recursiveName?: string;

  parent?: MenuItem;
}
