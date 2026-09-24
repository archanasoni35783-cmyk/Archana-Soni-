import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    formatPrice,
    setQuickViewProduct
  } = useShop();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Saved Items ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div key={item.productId} className="pt-4 first:pt-0 flex gap-4 items-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    onClick={() => {
                      setQuickViewProduct(item.product);
                      setIsWishlistOpen(false);
                    }}
                    className="w-18 h-18 rounded-xl object-cover bg-slate-100 dark:bg-slate-800 shrink-0 cursor-pointer border border-slate-200 dark:border-slate-700"
                  />
                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        setQuickViewProduct(item.product);
                        setIsWishlistOpen(false);
                      }}
                      className="text-xs font-bold text-slate-900 dark:text-white truncate cursor-pointer hover:text-blue-600"
                    >
                      {item.product.name}
                    </h4>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 tabular-nums">
                      {formatPrice(item.product.price)}
                    </p>

                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        onClick={() => {
                          addToCart(item.product);
                          toggleWishlist(item.product);
                        }}
                        className="py-1 px-3 bg-[#1A73E8] hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className="p-1.5 text-slate-400 hover:text-red-500"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-950/60 mx-auto flex items-center justify-center text-red-500">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Save pieces you love to keep track of seasonal availability and flash sales.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
