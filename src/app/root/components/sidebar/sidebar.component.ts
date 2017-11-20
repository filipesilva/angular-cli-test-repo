import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './../../../cg/models/menu-item';
import { RootStore } from './../../stores/root.store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public itemsMenu$: Observable<MenuItem[]>;

  constructor(
    private rootStore: RootStore) { }

  ngOnInit() {
    this.loadMenuItem();
  }

  private loadMenuItem(): void {
    this.itemsMenu$ = this.rootStore.data.menuItem$.share();
    this.rootStore.loadMenuItem();
  }

}
