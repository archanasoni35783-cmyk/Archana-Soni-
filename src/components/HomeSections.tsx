import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { REVIEWS } from '../data/products';
import menCategoryImg from '../assets/images/men_apparel_collection_1790231929281.jpg';
import womenCategoryImg from '../assets/images/women_apparel_collection_1790231943266.jpg';
import accCategoryImg from '../assets/images/accessories_showcase_1790231960984.jpg';
import bundleImg from '../assets/images/bundle_save_montage_1790232847421.jpg';

export const HomeSections: React.FC = () => {
  const { products, setActiveTab, setIsRewardsModalOpen, showToast } = useShop();

  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Curated lists for sections
  const trendingProducts = products.filter((p) => p.isTrending).slice(0, 4);
  const bestSellerProducts = products.filter((p) => p.isBestSeller).slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setNewsletterSubscribed(true);
    showToast('Subscribed! Welcome code GOOGLE10 is ready.');
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6">
      {/* 1. TRENDING NOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Trending Now
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              The season&apos;s most requested styles and essentials
            </p>
          </div>
          <button
            onClick={() => setActiveTab('new-arrivals')}
            className="flex items-center gap-1 text-xs font-semibold text-[#1A73E8] hover:text-blue-700 dark:text-blue-400 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trendingProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Shop By Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Explore curated looks crafted for every moment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Men Category Card */}
          <div
            onClick={() => setActiveTab('men')}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all"
          >
            <img
              src={menCategoryImg}
              alt="Men's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Men</h3>
                <p className="text-xs text-slate-300">Tees, Polos, Denims & Hoodies</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#1A73E8] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Women Category Card */}
          <div
            onClick={() => setActiveTab('women')}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all"
          >
            <img
              src={womenCategoryImg}
              alt="Women's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Women</h3>
                <p className="text-xs text-slate-300">Kurtis, Tops, Sarees & Pants</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#1A73E8] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Accessories Category Card */}
          <div
            onClick={() => setActiveTab('accessories')}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all"
          >
            <img
              src={accCategoryImg}
              alt="Accessories Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Accessories</h3>
                <p className="text-xs text-slate-300">Watches, Backpacks, Caps & Rings</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#1A73E8] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Promo Offer Card (Matching the reference screenshot) */}
          <div className="relative h-64 rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-[#1A73E8] via-[#1557B0] to-[#0D47A1] text-white flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider">
                Limited-Time Offer
              </span>
              <h3 className="text-2xl font-black leading-tight">
                Up to 50% Off
              </h3>
              <p className="text-xs text-blue-100">
                On Selected Styles &amp; Flash Bundles.
              </p>
            </div>

            <div>
              <button
                onClick={() => setActiveTab('sale')}
                className="px-4 py-2 bg-white text-[#1A73E8] hover:bg-blue-50 text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Best Sellers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Verified top-rated garments loved by thousands
            </p>
          </div>
          <button
            onClick={() => setActiveTab('best-sellers')}
            className="flex items-center gap-1 text-xs font-semibold text-[#1A73E8] hover:text-blue-700 dark:text-blue-400 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bestSellerProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 4. BUNDLE & SAVE BANNER (Matching reference screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-50 via-orange-50/40 to-amber-100/30 dark:from-slate-800 dark:via-slate-850 dark:to-slate-800 border border-amber-200/70 dark:border-slate-700 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-amber-200/80 bg-white">
              <img
                src={bundleImg}
                alt="Apparel Bundle & Save"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Offer</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Bundle &amp; Save
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md">
                <span className="font-semibold text-amber-700 dark:text-amber-400">Mix. Match. Save More.</span> Get an extra 10% off when you buy any 2 products with code{' '}
                <span className="font-mono font-bold bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-amber-300 dark:border-slate-600 text-slate-900 dark:text-white">
                  GOOGLE10
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setActiveTab('men')}
              className="px-6 py-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
            >
              Shop Bundles
            </button>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS / TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Customer Reviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Real feedback from real Google Apparels shoppers
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 cards view on desktop, carousel on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((rev, idx) => (
            <div
              key={rev.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between transition-all ${
                activeReviewIdx === idx ? 'ring-2 ring-blue-500/30' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {rev.author}
                    </h4>
                    <p className="text-[11px] text-slate-400">{rev.date}</p>
                  </div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Purchase
                </span>
                {rev.productName && (
                  <span className="text-slate-400 text-[11px] truncate max-w-[130px]">
                    {rev.productName}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEWSLETTER & STYLE REWARDS CLUB (Matching screenshot dual banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Newsletter subscription */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Join Our Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Get the latest updates, new arrivals and exclusive private offers.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={newsletterSubscribed}
                className="flex-1 px-4 py-2.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-transparent focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                disabled={newsletterSubscribed}
                className="px-5 py-2.5 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer disabled:bg-emerald-600"
              >
                {newsletterSubscribed ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Google Style Rewards Club banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-800 border border-blue-200/70 dark:border-slate-700 shadow-xs flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Style Rewards Club
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Earn points on every apparel order. Get exclusive perks, early access and birthday gifts.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsRewardsModalOpen(true)}
                  className="px-5 py-2 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Join Now
                </button>
              </div>
            </div>

            <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/50 items-center justify-center shrink-0 text-blue-600 dark:text-blue-300">
              <Sparkles className="w-10 h-10 text-amber-500 fill-amber-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
