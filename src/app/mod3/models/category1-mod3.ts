
export interface Category1Mod3 {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  recursiveName?: string;

  parent?: Category1Mod3;
}
