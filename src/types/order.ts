export interface OrderItem {
  id: string;
  name: string;
  category?: string;
  material: string;
  size?: string;
  length?: string;
  quantity: number;
  price: number;
  image: string;
  graphicType?: "solitaire-ring" | "hoop-earrings" | "clover-necklace";
}

export type OrderStepStatus = "completed" | "current" | "upcoming";

export interface OrderStep {
  id: string;
  label: string;
  date?: string;
  status: OrderStepStatus;
  iconName: "check" | "package" | "truck" | "bike" | "gift";
}

export interface DeliveryAddress {
  fullName: string;
  line1: string;
  line2: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface DeliveryMethod {
  title: string;
  estimatedDate: string;
  description: string;
}

export interface PaymentInfo {
  provider: "mastercard" | "visa" | "applepay";
  last4: string;
}

export interface OrderDetails {
  orderId: string;
  email: string;
  orderDate: string;
  expectedDelivery: string;
  statusMessage: string;
  steps: OrderStep[];
  deliveryAddress: DeliveryAddress;
  deliveryMethod: DeliveryMethod;
  payment: PaymentInfo;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  estimatedTaxes: number;
  total: number;
  currency: string;
}
