export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  image: string;
  isWishlisted?: boolean;
  graphicType?: "marquise-ring" | "tennis-bracelet" | "pear-earrings" | "heart-pendant";
}

export interface TrustBadgeItem {
  id: string;
  title: string;
  description: string;
  iconName: "shield" | "globe" | "rotate-ccw" | "award";
}
