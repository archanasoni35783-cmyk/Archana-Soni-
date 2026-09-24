import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, WishlistItem, Coupon, Order } from '../types';
import { PRODUCTS, COUPONS } from '../data/products';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: WishlistItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSubcategory: string | null;
  setSelectedSubcategory: (sub: string | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (p: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isRewardsModalOpen: boolean;
  setIsRewardsModalOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  rewardsPoints: number;
  addRewardsPoints: (pts: number) => void;
  addToCart: (product: Product, size?: string, color?: { name: string; hex: string }, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  appliedCoupon: Coupon | null;
  couponError: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  totalAmount: number;
  orders: Order[];
  placeOrder: (address: Order['shippingAddress'], paymentMethod: string) => Order;
  formatPrice: (price: number) => string;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial sample cart items matching the design screenshot
    const tee = PRODUCTS.find((p) => p.id === 'men-tee-1');
    const hoodie = PRODUCTS.find((p) => p.id === 'men-hoodie-1');
    const cap = PRODUCTS.find((p) => p.id === 'acc-cap-1');
    const initial: CartItem[] = [];
    if (tee) {
      initial.push({
        id: `${tee.id}-M-white`,
        product: tee,
        quantity: 1,
        selectedSize: 'M',
        selectedColor: tee.colors?.[0]
      });
    }
    if (hoodie) {
      initial.push({
        id: `${hoodie.id}-L-navy`,
        product: hoodie,
        quantity: 1,
        selectedSize: 'L',
        selectedColor: hoodie.colors?.[1]
      });
    }
    if (cap) {
      initial.push({
        id: `${cap.id}-onesize-navy`,
        product: cap,
        quantity: 1,
        selectedSize: 'One Size',
        selectedColor: cap.colors?.[1]
      });
    }
    return initial;
  });

  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const p1 = PRODUCTS.find((p) => p.id === 'men-polo-1');
    const p2 = PRODUCTS.find((p) => p.id === 'women-kurti-1');
    const initial: WishlistItem[] = [];
    if (p1) initial.push({ productId: p1.id, product: p1, addedAt: new Date().toISOString() });
    if (p2) initial.push({ productId: p2.id, product: p2, addedAt: new Date().toISOString() });
    return initial;
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [isRewardsModalOpen, setIsRewardsModalOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);
  const [rewardsPoints, setRewardsPoints] = useState<number>(1250);
  const [orders, setOrders] = useState<Order[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('google_apparels_theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('google_apparels_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('google_apparels_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addRewardsPoints = (pts: number) => {
    setRewardsPoints((prev) => prev + pts);
  };

  const addToCart = (
    product: Product,
    size?: string,
    color?: { name: string; hex: string },
    quantity: number = 1
  ) => {
    const chosenSize = size || (product.sizes ? product.sizes[0] : 'Standard');
    const chosenColor = color || (product.colors ? product.colors[0] : undefined);
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor ? chosenColor.name : 'def'}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          quantity,
          selectedSize: chosenSize,
          selectedColor: chosenColor
        }
      ];
    });

    showToast(`Added "${product.name}" to your cart!`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from cart');
  };

  const updateQuantity = (cartItemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.productId === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from Wishlist`);
        return prev.filter((item) => item.productId !== product.id);
      } else {
        showToast(`Saved "${product.name}" to Wishlist!`);
        return [...prev, { productId: product.id, product, addedAt: new Date().toISOString() }];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.some((item) => item.productId === productId);

  // Cart calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountType === 'percentage') {
      discountAmount = Math.round((subtotal * appliedCoupon.value) / 100);
    } else {
      discountAmount = appliedCoupon.value;
    }
  }

  // Free shipping above ₹999 as prominently stated in the design
  const shippingFee = subtotal === 0 || subtotal >= 999 ? 0 : 99;
  const totalAmount = Math.max(0, subtotal - discountAmount + shippingFee);

  const applyCoupon = (code: string): boolean => {
    setCouponError(null);
    const cleaned = code.trim().toUpperCase();
    const found = COUPONS.find((c) => c.code === cleaned);
    if (!found) {
      setCouponError('Invalid coupon code. Try "GOOGLE10" or "STYLE20".');
      return false;
    }
    if (subtotal < found.minOrder) {
      setCouponError(`Min order of ₹${found.minOrder} required for ${found.code}.`);
      return false;
    }
    setAppliedCoupon(found);
    showToast(`Coupon "${found.code}" applied!`);
    return true;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError(null);
    showToast('Coupon removed');
  };

  const placeOrder = (address: Order['shippingAddress'], paymentMethod: string): Order => {
    const newOrder: Order = {
      id: `GOOG-${Date.now().toString().slice(-6)}`,
      items: [...cart],
      subtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total: totalAmount,
      status: 'Confirmed',
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      shippingAddress: address,
      paymentMethod
    };

    setOrders((prev) => [newOrder, ...prev]);
    // Earn 1 reward point per ₹10 spent
    const earnedPoints = Math.floor(totalAmount / 10);
    addRewardsPoints(earnedPoints);
    clearCart();
    setAppliedCoupon(null);
    return newOrder;
  };

  const formatPrice = (price: number): string => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        activeTab,
        setActiveTab,
        selectedSubcategory,
        setSelectedSubcategory,
        searchQuery,
        setSearchQuery,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isRewardsModalOpen,
        setIsRewardsModalOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        darkMode,
        toggleDarkMode,
        rewardsPoints,
        addRewardsPoints,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        appliedCoupon,
        couponError,
        applyCoupon,
        removeCoupon,
        subtotal,
        discountAmount,
        shippingFee,
        totalAmount,
        orders,
        placeOrder,
        formatPrice,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
