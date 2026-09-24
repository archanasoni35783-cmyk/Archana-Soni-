import React, { useState } from 'react';
import { Heart, Star, Eye, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct, formatPrice } = useShop();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const currentImage = isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image slot */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-2.5 left-2.5 z-10 bg-[#EA4335] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
            {product.discountPercentage}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full backdrop-blur-md transition-all shadow-xs cursor-pointer ${
            inWishlist
              ? 'bg-red-50 text-red-600 dark:bg-red-950/80 dark:text-red-400'
              : 'bg-white/80 text-slate-600 hover:text-red-600 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-red-400'
          }`}
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Fallback container if image fails */}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-400">
            <ShoppingBag className="w-8 h-8 mb-2 opacity-50 text-blue-500" />
            <span className="text-xs font-medium text-center text-slate-600 dark:text-slate-300">
              {product.name}
            </span>
          </div>
        ) : (
          <img
            src={currentImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-105`}
          />
        )}

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 py-2 px-3 bg-white/95 dark:bg-slate-900/95 hover:bg-white text-slate-800 dark:text-slate-100 text-xs font-semibold rounded-xl shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1">
        {/* Rating & Review count */}
        <div className="flex items-center gap-1.5 mb-1.5 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="ml-1 font-bold text-slate-800 dark:text-slate-200 tabular-nums">
              {product.rating}
            </span>
          </div>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="text-[11px] tabular-nums">
            ({product.reviewCount > 999 ? `${(product.reviewCount / 1000).toFixed(1)}k` : product.reviewCount})
          </span>
        </div>

        {/* Product Name */}
        <h3
          onClick={() => setQuickViewProduct(product)}
          className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1 cursor-pointer mb-2"
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Price Row */}
        <div className="mt-auto flex items-baseline gap-2 mb-3">
          <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-slate-400 line-through tabular-nums">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Action Button: Add to Cart */}
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 px-3 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] active:scale-98 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-sm cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};
