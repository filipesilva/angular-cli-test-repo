
export interface Category2Mod2 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category2Mod2;
}
