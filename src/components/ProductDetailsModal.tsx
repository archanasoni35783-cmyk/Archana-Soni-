import React, { useState } from 'react';
import {
  X,
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Ruler
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';

export const ProductDetailsModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    products,
    formatPrice,
    setIsSizeGuideOpen,
    showToast
  } = useShop();

  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColorIdx, setSelectedColorIdx] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>('560001');
  const [pincodeChecked, setPincodeChecked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping' | 'reviews'>('desc');

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const inWishlist = isInWishlist(product.id);
  const currentSize = selectedSize || (product.sizes ? product.sizes[0] : 'Standard');
  const currentColor = product.colors ? product.colors[selectedColorIdx] : undefined;

  // Find related products in the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, currentSize, currentColor, quantity);
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length >= 6) {
      setPincodeChecked(true);
      showToast('Delivery available to your location!');
    } else {
      showToast('Please enter a valid 6-digit pin code');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div
        className="fixed inset-0"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Modal Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white text-slate-600 dark:text-slate-300 shadow-sm transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 capitalize">
            <span>Home</span>
            <span>&gt;</span>
            <span>{product.category}</span>
            <span>&gt;</span>
            <span>{product.subcategory.replace('-', ' ')}</span>
            <span>&gt;</span>
            <span className="text-slate-700 dark:text-slate-200 font-semibold truncate max-w-[200px]">
              {product.name}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Gallery Column */}
            <div className="md:col-span-6 space-y-4">
              {/* Main Preview Image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                <img
                  src={product.images[selectedImgIdx] || product.images[0]}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-3 left-3 bg-[#EA4335] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm uppercase">
                    {product.discountPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Selector */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIdx(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        selectedImgIdx === idx
                          ? 'border-blue-600 ring-2 ring-blue-500/20'
                          : 'border-slate-200 dark:border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info & Purchase Column */}
            <div className="md:col-span-6 space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {product.name}
                </h2>

                {/* Rating & Review */}
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 font-bold text-slate-800 dark:text-slate-200 tabular-nums">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {product.reviewCount} customer reviews
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" /> In Stock
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.discountPercentage > 0 && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Save {product.discountPercentage}%
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 -mt-2">Inclusive of all local taxes &amp; GST</p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Select Size:</span>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Size Guide</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => {
                      const isSelected = currentSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                              : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span>Color: </span>
                    <span className="font-normal text-slate-500">
                      {currentColor?.name}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorIdx(idx)}
                        className={`w-7 h-7 rounded-full border border-slate-300 dark:border-slate-600 relative flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ${
                          selectedColorIdx === idx ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColorIdx === idx && (
                          <Check
                            className={`w-3.5 h-3.5 ${
                              color.name.toLowerCase().includes('white')
                                ? 'text-slate-900'
                                : 'text-white'
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector & Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-500 hover:text-slate-900 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-bold tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-slate-500 hover:text-slate-900 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-6 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart · {formatPrice(product.price * quantity)}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      inWishlist
                        ? 'bg-red-50 dark:bg-red-950/50 border-red-200 text-red-600'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-600 dark:text-slate-300'
                    }`}
                    title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Key Highlights / Trust cards */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                    {product.fabric ? 'Premium Fabric' : '100% Official'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {product.fabric || 'Certified Quality'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                    Comfort Fit
                  </span>
                  <span className="text-[10px] text-slate-400">All-Day Wear</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                    Easy Exchange
                  </span>
                  <span className="text-[10px] text-slate-400">30-Day Returns</span>
                </div>
              </div>

              {/* Pin Code Delivery Estimator */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <div className="relative flex-1">
                    <Truck className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value);
                        setPincodeChecked(false);
                      }}
                      placeholder="Enter Delivery Pincode"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 text-white rounded-xl text-xs font-semibold"
                  >
                    Check
                  </button>
                </form>

                {pincodeChecked && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    Delivery by Tomorrow, 5:00 PM · Free Express Shipping
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Tabbed Info Section */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex border-b border-slate-200 dark:border-slate-800 gap-6 text-xs font-bold">
              {[
                { id: 'desc', label: 'Description' },
                { id: 'specs', label: 'Specifications' },
                { id: 'shipping', label: 'Shipping & Returns' },
                { id: 'reviews', label: 'Customer Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 relative transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-[#1A73E8] dark:text-blue-400'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A73E8] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="py-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeTab === 'desc' && (
                <div className="space-y-3">
                  <p>{product.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-500 dark:text-slate-400">
                    <li>Authentic Google Apparels merchandise</li>
                    <li>Reinforced double-needle stitching on seams</li>
                    <li>Pre-shrunk fabric to preserve fit across repeated washes</li>
                  </ul>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block">Fabric</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {product.fabric || '100% Combed Cotton'}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block">Fit Type</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {product.fit || 'Regular Fit'}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <span className="text-[11px] text-slate-400 block">Care Instructions</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Machine Wash Cold, Gentle Cycle
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Free Standard Shipping on all orders above ₹999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">30-day hassle-free returns and instant exchanges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">100% Official merchandise guarantee</span>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800 dark:text-slate-200">Vikram S.</span>
                      <span className="text-amber-500">★★★★★</span>
                    </div>
                    <p className="text-slate-500 mt-1">
                      Outstanding quality and fits true to size. Delivery was prompt.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                You May Also Like
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
