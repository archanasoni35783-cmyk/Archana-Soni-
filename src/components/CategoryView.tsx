import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, X, Check } from 'lucide-react';
import { Product, ProductCategory, Subcategory } from '../types';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import menBannerImg from '../assets/images/men_collection_banner_1790232818690.jpg';
import womenBannerImg from '../assets/images/women_collection_banner_1790232833516.jpg';
import accBannerImg from '../assets/images/accessories_showcase_1790231960984.jpg';

interface CategoryViewProps {
  category?: ProductCategory;
  title: string;
  subtitle: string;
  bannerImage?: string;
  filterType?: 'trending' | 'bestsellers' | 'new' | 'sale';
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  title,
  subtitle,
  bannerImage,
  filterType
}) => {
  const { products, selectedSubcategory, setSelectedSubcategory } = useShop();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(8000);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Determine subcategories according to category
  const subcategories: { id: Subcategory; label: string }[] = useMemo(() => {
    if (category === 'men') {
      return [
        { id: 't-shirts', label: 'T-Shirts' },
        { id: 'polo-t-shirts', label: 'Polo T-Shirts' },
        { id: 'shirts', label: 'Shirts' },
        { id: 'vests', label: 'Vests' },
        { id: 'shorts', label: 'Shorts' },
        { id: 'pants', label: 'Pants' },
        { id: 'pyjamas', label: 'Pyjamas' },
        { id: 'denims', label: 'Denims' },
        { id: 'hoodies', label: 'Hoodies' }
      ];
    }
    if (category === 'women') {
      return [
        { id: 'tops', label: 'Tops' },
        { id: 'kurtis', label: 'Kurtis' },
        { id: 'pants', label: 'Pants' },
        { id: 'denims', label: 'Denims' },
        { id: 'sarees', label: 'Sarees' },
        { id: 'hoodies', label: 'Hoodies' }
      ];
    }
    if (category === 'accessories') {
      return [
        { id: 'watches', label: 'Watches' },
        { id: 'bags', label: 'Bags' },
        { id: 'backpacks', label: 'Backpacks' },
        { id: 'caps', label: 'Caps' },
        { id: 'bracelets', label: 'Bracelets' },
        { id: 'chains', label: 'Chains' },
        { id: 'rings', label: 'Rings' }
      ];
    }
    return [];
  }, [category]);

  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const availableColors = [
    { name: 'Black', hex: '#0F172A' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Navy', hex: '#1E3A8A' },
    { name: 'Grey', hex: '#64748B' },
    { name: 'Beige', hex: '#D6D3D1' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Red', hex: '#991B1B' },
    { name: 'Green', hex: '#166534' }
  ];

  // Filtering products
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category match
      if (category && prod.category !== category) return false;

      // Filter types if not category-specific
      if (filterType === 'trending' && !prod.isTrending) return false;
      if (filterType === 'bestsellers' && !prod.isBestSeller) return false;
      if (filterType === 'new' && !prod.isNewArrival) return false;
      if (filterType === 'sale' && !prod.isSale) return false;

      // Subcategory filter
      if (selectedSubcategory && prod.subcategory !== selectedSubcategory) {
        return false;
      }

      // Price filter
      if (prod.price > maxPrice) return false;

      // Size filter
      if (selectedSizes.length > 0 && prod.sizes) {
        const hasSize = prod.sizes.some((s) => selectedSizes.includes(s));
        if (!hasSize) return false;
      }

      // Color filter
      if (selectedColors.length > 0 && prod.colors) {
        const hasColor = prod.colors.some((c) =>
          selectedColors.some((sc) => c.name.toLowerCase().includes(sc.toLowerCase()))
        );
        if (!hasColor) return false;
      }

      return true;
    });
  }, [products, category, filterType, selectedSubcategory, maxPrice, selectedSizes, selectedColors]);

  // Sorting products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === 'price-low') {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-high') {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'rating') {
      return list.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === 'newest') {
      return list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    }
    // Default popularity
    return list.sort((a, b) => b.reviewCount - a.reviewCount);
  }, [filteredProducts, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedSubcategory(null);
    setSelectedSizes([]);
    setSelectedColors([]);
    setMaxPrice(8000);
  };

  const activeFiltersCount =
    (selectedSubcategory ? 1 : 0) +
    selectedSizes.length +
    selectedColors.length +
    (maxPrice < 8000 ? 1 : 0);

  // Choose appropriate fallback banner if not provided
  const headerBanner =
    bannerImage ||
    (category === 'men'
      ? menBannerImg
      : category === 'women'
      ? womenBannerImg
      : category === 'accessories'
      ? accBannerImg
      : menBannerImg);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Header Card */}
      <div className="relative rounded-3xl overflow-hidden mb-8 bg-slate-900 text-white min-h-[180px] sm:min-h-[220px] flex items-center shadow-sm">
        <img
          src={headerBanner}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent" />

        <div className="relative z-10 p-6 sm:p-10 max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Google Apparels Official
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">{title}</h1>
          <p className="text-sm sm:text-base text-slate-300">{subtitle}</p>
        </div>
      </div>

      {/* Subcategory Pills / Tabs (if available) */}
      {subcategories.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedSubcategory === null
                  ? 'bg-[#1A73E8] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              All Items ({products.filter((p) => p.category === category).length})
            </button>
            {subcategories.map((sub) => {
              const count = products.filter(
                (p) => p.category === category && p.subcategory === sub.id
              ).length;
              const isSelected = selectedSubcategory === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubcategory(isSelected ? null : sub.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#1A73E8] text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{sub.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Grid Layout: Sidebar + Products */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Mobile Filter Trigger */}
        <div className="lg:hidden flex items-center justify-between bg-white dark:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200"
          >
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <span>Filters ({activeFiltersCount})</span>
          </button>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none"
            >
              <option value="popularity">Popularity</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Sidebar Filters Desktop */}
        <aside className="hidden lg:block space-y-6 bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filters</span>
            </h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Subcategory Filter list if available */}
          {subcategories.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Category
              </label>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {subcategories.map((sub) => {
                  const count = products.filter(
                    (p) => p.category === category && p.subcategory === sub.id
                  ).length;
                  const isChecked = selectedSubcategory === sub.id;
                  return (
                    <div
                      key={sub.id}
                      onClick={() => setSelectedSubcategory(isChecked ? null : sub.id)}
                      className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <span
                        className={`${
                          isChecked
                            ? 'font-bold text-blue-600 dark:text-blue-400'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {sub.label}
                      </span>
                      <span className="text-[11px] text-slate-400">({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Size
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              {availableSizes.map((size) => {
                const isSelected = selectedSizes.includes(size);
                return (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Color
            </label>
            <div className="flex flex-wrap gap-2">
              {availableColors.map((color) => {
                const isSelected = selectedColors.includes(color.name);
                return (
                  <button
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 relative flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                      isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {isSelected && (
                      <Check
                        className={`w-3.5 h-3.5 ${
                          color.name === 'White' || color.name === 'Beige'
                            ? 'text-slate-900'
                            : 'text-white'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Price Range
              </label>
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                ₹0 - ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="8000"
              step="200"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
          </div>

          {/* Sort By Desktop */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Sort By
            </label>
            <div className="space-y-1 text-xs">
              {[
                { id: 'popularity', label: 'Popularity' },
                { id: 'newest', label: 'Newest' },
                { id: 'price-low', label: 'Price: Low to High' },
                { id: 'price-high', label: 'Price: High to Low' },
                { id: 'rating', label: 'Top Customer Rating' }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSortBy(opt.id)}
                  className={`flex items-center gap-2 p-1.5 rounded-lg cursor-pointer transition-colors ${
                    sortBy === opt.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                      sortBy === opt.id ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                    }`}
                  >
                    {sortBy === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* Header bar showing counts and active sort */}
          <div className="hidden lg:flex items-center justify-between bg-white dark:bg-slate-850 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Showing <span className="font-bold text-slate-900 dark:text-white tabular-nums">{sortedProducts.length}</span> apparel styles
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">Sorted by:</span>
              <span className="font-bold text-[#1A73E8] capitalize">
                {sortBy.replace('-', ' ')}
              </span>
            </div>
          </div>

          {/* Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {sortedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                No matching apparel found
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Try clearing selected size, color, or price filters to see more official products.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-[#1A73E8] text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white dark:bg-slate-900 h-full p-6 overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Filter Products</h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold">Max Price</span>
                <span className="font-bold">₹{maxPrice}</span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Sizes */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase">Size</span>
              <div className="grid grid-cols-3 gap-2">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`py-1.5 text-xs font-semibold rounded-lg border ${
                      selectedSizes.includes(size)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="pt-4 flex gap-2">
              <button
                onClick={clearFilters}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Clear
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-[#1A73E8] text-white text-xs font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
