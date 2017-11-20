
export interface Category3Mod3 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category3Mod3;
}
