import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import heroImg from '../assets/images/hero_montage_google_v2_1790232801928.jpg';

export const Hero: React.FC = () => {
  const { setActiveTab } = useShop();

  return (
    <section className="relative overflow-hidden pt-4 pb-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/50 dark:from-slate-800/90 dark:via-slate-850 dark:to-slate-900 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
          {/* Subtle Google accent ambient glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 p-6 sm:p-10 lg:p-14">
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#34A853]" />
                <span>New Season 2026 Collection</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">100% Authentic</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
                Discover Google&apos;s <br />
                <span className="bg-gradient-to-r from-[#4285F4] via-[#1A73E8] to-[#0D47A1] bg-clip-text text-transparent">
                  Fashion Collection
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                Premium apparel, modern designs, and everyday essentials engineered for effortless comfort and signature style.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('men')}
                  className="px-6 py-3 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] active:scale-98 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveTab('best-sellers')}
                  className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-98 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>

              {/* Quick Trust markers */}
              <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>30-Day Hassle Free Returns</span>
                </div>
                <span>·</span>
                <div>Free delivery on orders ₹999+</div>
              </div>
            </div>

            {/* Right Column: Hero Fashion Montage */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg rounded-2xl overflow-hidden shadow-lg border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-800 aspect-16/10">
                <img
                  src={heroImg}
                  alt="Google Apparels Premium Fashion Collection"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge on image */}
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Curated Hoodies, Tees, Watches & Bags</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
