export type ProductCategory = 'men' | 'women' | 'accessories';

export type MenSubcategory =
  | 't-shirts'
  | 'polo-t-shirts'
  | 'shirts'
  | 'vests'
  | 'shorts'
  | 'pants'
  | 'pyjamas'
  | 'denims'
  | 'hoodies';

export type WomenSubcategory =
  | 'tops'
  | 'kurtis'
  | 'pants'
  | 'denims'
  | 'sarees'
  | 'hoodies';

export type AccessoriesSubcategory =
  | 'watches'
  | 'bags'
  | 'backpacks'
  | 'caps'
  | 'bracelets'
  | 'chains'
  | 'rings';

export type Subcategory = MenSubcategory | WomenSubcategory | AccessoriesSubcategory;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: Subcategory;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  isTrending?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isSale?: boolean;
  fabric?: string;
  fit?: string;
  inStock?: boolean;
}

export interface CartItem {
  id: string; // product id + size + color
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: { name: string; hex: string };
}

export interface WishlistItem {
  productId: string;
  product: Product;
  addedAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productName?: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  value: number;
  description: string;
  minOrder: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
  date: string;
  shippingAddress: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pinCode: string;
  };
  paymentMethod: string;
}
