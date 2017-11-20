
export interface Category3Mod1 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category3Mod1;
}
