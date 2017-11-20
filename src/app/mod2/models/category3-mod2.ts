
export interface Category3Mod2 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category3Mod2;
}
