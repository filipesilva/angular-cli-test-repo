
export interface Category1Mod1 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category1Mod1;
}
