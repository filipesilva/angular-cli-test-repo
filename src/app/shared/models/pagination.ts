export interface Pagination {
  firstItemOnPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastItemOnPage: number;
  pageCount: number;
  pageNumber: number;
  pageSize: number;
  totalItemCount: number;
  pageStart: number;
  pageStop: number;
  paginationRange: number[];
}
