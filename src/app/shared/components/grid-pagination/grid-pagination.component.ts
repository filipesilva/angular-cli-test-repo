import { Component, Input } from '@angular/core';
import { GridComponent } from './../grid/grid.component';

@Component({
  selector: 'app-grid-pagination',
  templateUrl: './grid-pagination.component.html'
})
export class GridPaginationComponent {

  @Input() grid: GridComponent;

  newPageSize(): void {
    this.grid.newPageSize(this.grid.pagination.pageSize);
  }

  page(pageNumber: number): void {
    this.grid.page(pageNumber);
  }

}
