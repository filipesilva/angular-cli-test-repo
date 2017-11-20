
export interface Category1Mod2 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category1Mod2;
}
