import { HttpParams } from '@angular/common/http';

export class GridParameter {
  constructor(
    public pageNumber: number,
    public pageSize: number,
    public orderBy: string,
    public textToSearch: string,
    public filters: any
  ) { }

  get urlParams() {
    return `${this.pageNumber}/${this.pageSize}/${this.orderBy}/${this.textToSearch}`;
  }

  get searchParams(): HttpParams {
    let params: HttpParams = new HttpParams();

    for (const key in this.filters) {
      if (this.filters.hasOwnProperty(key)) {
        const values = this.filters[key].toString().split(',');
        for (let x = 0; x < values.length; x++) {
          params = params.append(key, values[x]);
        }
      }
    }

    return params;
  }
}
