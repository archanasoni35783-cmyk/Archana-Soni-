import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { setActiveTab, setSelectedSubcategory, setIsSizeGuideOpen, setIsRewardsModalOpen } = useShop();

  const handleNav = (tab: string, sub?: string) => {
    setActiveTab(tab);
    if (sub) setSelectedSubcategory(sub);
    else setSelectedSubcategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
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

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Google Apparels brings together iconic design aesthetics, premium cotton blends, and modern wardrobe essentials built for all-day comfort.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified Original Garments &amp; Merchandise</span>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('men')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Men&apos;s Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('women')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Women&apos;s Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('accessories')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Fashion Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('new-arrivals')}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sale')}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Flash Sale (50% Off)
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Size Guide &amp; Fit
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsRewardsModalOpen(true)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Rewards Club
                </button>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Shipping &amp; Delivery
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Returns &amp; Exchanges
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Track Your Order
                </span>
              </li>
            </ul>
          </div>

          {/* About & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Our Story
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Sustainable Materials
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-blue-600 transition-colors cursor-pointer">
                  Contact Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & payment trust badges */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="flex items-center gap-1">
            <span>© 2026 Google Apparels. All rights reserved. Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for everyday style.</span>
          </p>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
              GPay / UPI
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
              Visa
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
              Mastercard
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
              RuPay
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
              Cash on Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
