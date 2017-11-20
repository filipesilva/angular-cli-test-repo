
export interface Category2Mod3 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category2Mod3;
}
