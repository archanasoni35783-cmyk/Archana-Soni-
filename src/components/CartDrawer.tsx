import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, Check, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    totalAmount,
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    formatPrice
  } = useShop();

  const [couponInput, setCouponInput] = useState<string>('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
          {/* Cart Header */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1A73E8]" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Your Shopping Bag{' '}
                <span className="text-xs font-normal text-slate-400">
                  ({cart.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 rounded-xl object-cover bg-slate-100 dark:bg-slate-800 shrink-0 border border-slate-200 dark:border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Size: <span className="font-semibold text-slate-600 dark:text-slate-300">{item.selectedSize}</span>
                      {item.selectedColor && (
                        <span> · Color: {item.selectedColor.name}</span>
                      )}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-slate-500 hover:text-slate-900 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-slate-500 hover:text-slate-900 font-bold"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-slate-900 dark:text-white tabular-nums">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-950/60 mx-auto flex items-center justify-center text-blue-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                  Your bag is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Explore Google Apparels collection to discover modern fashion essentials.
                </p>
              </div>
            )}
          </div>

          {/* Footer Summary with Coupon & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 space-y-4">
              {/* Coupon Form */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                      <Tag className="w-4 h-4" />
                      <span className="font-bold">{appliedCoupon.code}</span>
                      <span className="text-[11px]">({appliedCoupon.description})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-red-500 hover:underline font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="space-y-1">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Have a coupon code? (e.g. GOOGLE10)"
                          className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl uppercase outline-none focus:border-blue-500"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <p className="text-[11px] text-red-500 pl-1">{couponError}</p>
                    )}
                  </form>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 tabular-nums">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Discount</span>
                    <span className="tabular-nums">-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Free</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between text-sm font-bold text-slate-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-base tabular-nums">{formatPrice(totalAmount)}</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] active:scale-98 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
