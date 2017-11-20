import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MenuItemService } from './../../cg/services/menu-item.service';
import { MenuItem } from './../../cg/models/menu-item';

@Injectable()
export class RootStore {

  public data: {
    menuItem$: BehaviorSubject<MenuItem[]>;
  };

  constructor(
    private menuItemService: MenuItemService) {
    this.data = {
      menuItem$: new BehaviorSubject([])
    };
  }

  public loadMenuItem(): void {
    this.menuItemService.getMenuSite()
      .subscribe(x => this.data.menuItem$.next(x));
  }

}
