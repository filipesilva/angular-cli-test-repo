import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from './../base/base.component';
import { GridParameter } from './../../models/grid-parameter';
import { GridData } from './../../models/grid-data';
import { Pagination } from './../../models/pagination';
import { AuthService } from './../../services/auth.service';

@Component({
  templateUrl: './grid.component.html'
})
export class GridComponent extends BaseComponent {

  private orderByColumnName: string;
  private orderByAsc: boolean;
  private pageNumber: number;
  private pageSize: number;

  public items: any[];
  public textToSearch: string;
  public filters: any = {};
  public selects: any = {};
  public search: Function;

  public isFirstLoading: boolean;
  private _isLoading: boolean;
  private _pagination: Pagination;

  @Input() hasPaging = true;

  public get pagination(): Pagination {
    return this._pagination;
  }

  public set pagination(p: Pagination) {
    this._pagination = p;
    if (p.pageNumber > p.pageCount && p.pageNumber > 1 && this.isLoading === false) {
      this.pageNumber--;
      this.search();
    }
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public set isLoading(b: boolean) {
    this._isLoading = b;

    if (this.isFirstLoading === true && b === false) {
      this.isFirstLoading = b;
    }
  }

  constructor(
    authService: AuthService) {
    super(authService);
    this.textToSearch = '';
    this.isFirstLoading = true;
    this.isLoading = true;
    this.items = [];
    this.filters = {};
    this.selects = {};
  }

  init(orderByColumnName: string, orderByAsc: boolean, pageSize: number, search: Function, autoLoad: boolean = true): void {
    this.orderByColumnName = orderByColumnName;
    this.orderByAsc = orderByAsc;
    this.pageNumber = 1;
    this.pageSize = pageSize;
    this.search = search;

    if (autoLoad) {
      this.search();
    }
  }

  public load(gridData: GridData) {
    this.items = gridData.data;
    this.pagination = gridData.pagination;
    this.isLoading = false;
  }

  public checkClass(columnName: string): string {
    if (columnName === this.orderByColumnName) {
      if (this.orderByAsc) {
        return 'sort-asc';
      }
      return 'sort-desc';
    }

    return null;
  }

  public getParameters(): GridParameter {
    return new GridParameter(
      this.pageNumber,
      this.pageSize,
      this.getOrderBy(),
      this.textToSearch,
      this.filters
    );
  }

  public getUrlParameters(): string {
    let url = '';
    const param = this.getParameters();

    url = 'pageNumber' + '=' + encodeURIComponent(param.pageNumber.toString());
    url += '&pageSize' + '=' + encodeURIComponent(param.pageSize.toString());
    url += '&orderBy' + '=' + encodeURIComponent(param.orderBy);
    url += '&textToSearch' + '=' + encodeURIComponent(param.textToSearch);

    for (const key of param.filters) {
      url += '&' + key + '=' + encodeURIComponent(param.filters[key]);
    }

    return url;
  }

  private getOrderBy(): string {
    return this.orderByColumnName + ' ' + (this.orderByAsc ? 'asc' : 'desc');
  }

  public order(columnName: string): void {
    if (columnName === this.orderByColumnName) {
      this.orderByAsc = !this.orderByAsc;
    } else {
      this.orderByColumnName = columnName;
      this.orderByAsc = true;
    }

    this.search();
  }

  public newSearch(): void {
    this.pageNumber = 1;
    this.search();
  }

  public newPageSize(size: number): void {
    this.pageNumber = 1;
    this.pageSize = size;
    this.search();
  }

  public page(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.search();
  }

  public hasData(): boolean {
    if (this.items && this.items.length > 0) {
      return true;
    }

    return false;
  }

}
