export interface Feature {
  idFeature: string;
  description?: string;
  featureKey?: string;
  featureName: string;
  idFeatureParent?: string;
  recursiveName?: string;

  parent?: Feature;
}
