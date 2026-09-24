import React from 'react';
import { Truck, ShieldCheck, CreditCard, RotateCcw } from 'lucide-react';

export const FeaturesBar: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      subtitle: 'Above ₹999'
    },
    {
      icon: ShieldCheck,
      title: '100% Official Collection',
      subtitle: 'Authentic & Original'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      subtitle: 'Safe & Encrypted'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      subtitle: 'Hassle Free'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-white dark:bg-slate-850 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 p-1.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center shrink-0 text-[#1A73E8] dark:text-blue-400">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
