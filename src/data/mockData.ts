import { OrderDetails } from "@/types/order";
import { Product, TrustBadgeItem } from "@/types/product";

export const initialOrderData: OrderDetails = {
  orderId: "#SID-284731",
  email: "you@email.com",
  orderDate: "17 Sep 2026",
  expectedDelivery: "25 - 28 Sep",
  statusMessage: "Your order has been received and is being prepared. We'll notify you as soon as it ships.",
  steps: [
    {
      id: "step-1",
      label: "Order confirmed",
      date: "17 Sep 2026",
      status: "completed",
      iconName: "check",
    },
    {
      id: "step-2",
      label: "Preparing",
      status: "current",
      iconName: "package",
    },
    {
      id: "step-3",
      label: "Shipped",
      status: "upcoming",
      iconName: "truck",
    },
    {
      id: "step-4",
      label: "Out for delivery",
      status: "upcoming",
      iconName: "bike",
    },
    {
      id: "step-5",
      label: "Delivered",
      status: "upcoming",
      iconName: "gift",
    },
  ],
  deliveryAddress: {
    fullName: "John Doe",
    line1: "Yıldız Mah. Çırağan Cad. No:12 Daire:5",
    line2: "Beşiktaş",
    city: "İstanbul",
    postalCode: "34349",
    country: "Türkiye",
  },
  deliveryMethod: {
    title: "Standard Insured Delivery",
    estimatedDate: "25 - 28 Sep",
    description: "Tracking updates will be shared via email.",
  },
  payment: {
    provider: "mastercard",
    last4: "3458",
  },
  items: [
    {
      id: "item-1",
      name: "Maison Éclat Solitaire Diamond Ring",
      material: "18k Gold • Diamond",
      size: "7",
      quantity: 1,
      price: 1250,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
      graphicType: "solitaire-ring",
    },
    {
      id: "item-2",
      name: "Maison Éclat Éclat Hoop Earrings",
      material: "18k Gold",
      size: "One size",
      quantity: 1,
      price: 1240,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80",
      graphicType: "hoop-earrings",
    },
    {
      id: "item-3",
      name: "Valona Clover Necklace",
      material: "18k Gold • Malachite",
      length: "42 cm",
      quantity: 1,
      price: 1420,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
      graphicType: "clover-necklace",
    },
  ],
  subtotal: 3910,
  deliveryFee: 0,
  estimatedTaxes: 312,
  total: 4222,
  currency: "USD",
};

export const trustBadges: TrustBadgeItem[] = [
  {
    id: "badge-1",
    title: "Secure Payments",
    description: "Your information is encrypted",
    iconName: "shield",
  },
  {
    id: "badge-2",
    title: "Insured Global Delivery",
    description: "To 100+ countries",
    iconName: "globe",
  },
  {
    id: "badge-3",
    title: "Easy Returns",
    description: "Hassle-free within 30 days",
    iconName: "rotate-ccw",
  },
  {
    id: "badge-4",
    title: "Authenticity Guaranteed",
    description: "Every piece is verified",
    iconName: "award",
  },
];

export const recommendedProducts: Product[] = [
  {
    id: "rec-1",
    name: "Marquise Diamond Ring",
    material: "18k Gold • Diamond",
    price: 1680,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80",
    isWishlisted: false,
    graphicType: "marquise-ring",
  },
  {
    id: "rec-2",
    name: "Tennis Bracelet",
    material: "18k Gold • Diamond",
    price: 2900,
    image: "https://images.unsplash.com/photo-1611591475152-4735450d0146?auto=format&fit=crop&w=500&q=80",
    isWishlisted: false,
    graphicType: "tennis-bracelet",
  },
  {
    id: "rec-3",
    name: "Pear Drop Earrings",
    material: "18k Gold • Diamond",
    price: 1760,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    isWishlisted: false,
    graphicType: "pear-earrings",
  },
  {
    id: "rec-4",
    name: "Heart Pendant",
    material: "18k Gold • Diamond",
    price: 1320,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=500&q=80",
    isWishlisted: false,
    graphicType: "heart-pendant",
  },
];
