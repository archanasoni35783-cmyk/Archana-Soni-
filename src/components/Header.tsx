import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Moon,
  Sun,
  X,
  Sparkles,
  Menu,
  ChevronRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    setSelectedSubcategory,
    searchQuery,
    setSearchQuery,
    cart,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsRewardsModalOpen,
    darkMode,
    toggleDarkMode,
    rewardsPoints,
    products,
    setQuickViewProduct
  } = useShop();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlist.length;

  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setSelectedSubcategory(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Top Announcement Bar */}
      <div className="bg-[#1A73E8] dark:bg-[#174EA6] text-white text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium tracking-wide">
            <span>⚡ Free Shipping Above ₹999</span>
            <span className="opacity-50">|</span>
            <span>Flash Sale: Up to 50% Off</span>
            <button
              onClick={() => handleNavClick('sale')}
              className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:opacity-85 transition-opacity ml-1 cursor-pointer"
            >
              Shop Now <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] opacity-90">
            <button
              onClick={() => setIsRewardsModalOpen(true)}
              className="flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>Google Style Rewards</span>
            </button>
            <span>·</span>
            <span>Official Store</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo & Tagline */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex flex-col cursor-pointer select-none shrink-0"
          >
            <div className="flex items-center gap-1.5">
              {/* Google 4-color dots icon */}
              <div className="flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>{' '}
                <span className="text-slate-800 dark:text-slate-100 font-semibold">Apparels</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 font-medium tracking-wider uppercase -mt-0.5 ml-3 hidden sm:block">
              Premium Apparel. Everyday Style.
            </span>
          </div>

          {/* Search Bar with instant autocomplete */}
          <div className="relative flex-1 max-w-lg hidden md:block">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-9 py-2 text-sm bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-full border border-transparent focus:border-[#4285F4] focus:bg-white dark:focus:bg-slate-900 outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Autocomplete Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsSearchFocused(false)}
                />
                <div className="absolute left-0 right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-700/60 animate-in fade-in zoom-in-95 duration-150">
                  <div className="p-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Search Results ({searchResults.length})
                  </div>
                  {searchResults.length > 0 ? (
                    searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setQuickViewProduct(prod);
                          setIsSearchFocused(false);
                        }}
                        className="p-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors"
                      >
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 object-cover rounded-lg bg-slate-100 dark:bg-slate-700"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-100 truncate">
                            {prod.name}
                          </p>
                          <p className="text-[11px] text-slate-400 capitalize">
                            {prod.category} · {prod.subcategory.replace('-', ' ')}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white tabular-nums">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                      No matching apparels found. Try &quot;Tee&quot;, &quot;Polo&quot;, or &quot;Watch&quot;.
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Rewards Points Badge */}
            <button
              onClick={() => setIsRewardsModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 text-[#1A73E8] dark:text-blue-400 rounded-full text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-200 dark:border-blue-900/60 cursor-pointer"
              title="Google Style Rewards"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span className="tabular-nums">{rewardsPoints} pts</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-slate-600" />
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistItemCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#EA4335] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale">
                  {wishlistItemCount}
                </span>
              )}
            </button>

            {/* Account dropdown button */}
            <div className="relative">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Account"
                title="Google Account"
              >
                <User className="w-5 h-5" />
              </button>

              {isAccountOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsAccountOpen(false)} />
                  <div className="absolute right-0 top-12 z-20 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-3 text-xs divide-y divide-slate-100 dark:divide-slate-700">
                    <div className="pb-3 px-1">
                      <p className="font-semibold text-slate-900 dark:text-white">Alex Morgan</p>
                      <p className="text-slate-400 text-[11px] truncate">alex.morgan@example.com</p>
                      <div className="mt-2 flex items-center justify-between text-[11px] bg-slate-50 dark:bg-slate-700/50 p-2 rounded-lg">
                        <span className="text-slate-500 dark:text-slate-400">Club Tier</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          Gold Member ✦
                        </span>
                      </div>
                    </div>
                    <div className="py-2 space-y-1">
                      <button
                        onClick={() => {
                          setIsAccountOpen(false);
                          setIsRewardsModalOpen(true);
                        }}
                        className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-between"
                      >
                        <span>Style Rewards Club</span>
                        <span className="font-bold text-amber-500">{rewardsPoints} pts</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsAccountOpen(false);
                          setIsWishlistOpen(true);
                        }}
                        className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-between"
                      >
                        <span>My Wishlist</span>
                        <span className="text-slate-400">{wishlist.length}</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 pl-2 pr-3 py-1.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full transition-all shadow-sm cursor-pointer ml-1"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4.5 h-4.5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#EA4335] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>

        {/* Navigation Links Row */}
        <nav className="hidden md:flex items-center space-x-8 py-2.5 text-xs font-medium border-t border-slate-100 dark:border-slate-800/80 overflow-x-auto no-scrollbar">
          {[
            { id: 'home', label: 'Home' },
            { id: 'men', label: 'Men' },
            { id: 'women', label: 'Women' },
            { id: 'accessories', label: 'Accessories' },
            { id: 'new-arrivals', label: 'New Arrivals' },
            { id: 'best-sellers', label: 'Best Sellers' },
            { id: 'sale', label: 'Sale', isHighlight: true }
          ].map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#1A73E8] dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.isHighlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335] animate-pulse"></span>
                  )}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A73E8] dark:bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          {/* Mobile search */}
          <div className="relative flex items-center mb-2">
            <Search className="w-4 h-4 absolute left-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Google Apparels..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {[
              { id: 'home', label: 'Home' },
              { id: 'men', label: 'Men' },
              { id: 'women', label: 'Women' },
              { id: 'accessories', label: 'Accessories' },
              { id: 'new-arrivals', label: 'New Arrivals' },
              { id: 'best-sellers', label: 'Best Sellers' },
              { id: 'sale', label: 'Flash Sale (50% Off)', isHighlight: true }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`p-2.5 rounded-xl text-left transition-colors ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
