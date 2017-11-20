
export interface Category2Mod1 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category2Mod1;
}
