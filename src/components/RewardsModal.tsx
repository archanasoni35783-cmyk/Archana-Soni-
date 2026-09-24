import React from 'react';
import { X, Sparkles, Gift, Check, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const RewardsModal: React.FC = () => {
  const { isRewardsModalOpen, setIsRewardsModalOpen, rewardsPoints, addRewardsPoints, showToast } = useShop();

  if (!isRewardsModalOpen) return null;

  const handleRedeem = (cost: number, perkName: string) => {
    if (rewardsPoints < cost) {
      showToast(`You need ${cost - rewardsPoints} more points to redeem this.`);
      return;
    }
    addRewardsPoints(-cost);
    showToast(`Redeemed "${perkName}"! Applied code to your account.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={() => setIsRewardsModalOpen(false)} />

      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-auto">
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white relative">
          <button
            onClick={() => setIsRewardsModalOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
              Google Style Rewards Club
            </span>
          </div>

          <div className="flex items-baseline justify-between mt-4">
            <div>
              <span className="text-xs text-blue-100">Your Current Balance</span>
              <h3 className="text-3xl sm:text-4xl font-black tabular-nums">
                {rewardsPoints.toLocaleString('en-IN')} <span className="text-lg font-medium text-blue-200">Points</span>
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
              Gold Tier ✦
            </div>
          </div>

          {/* Progress to next tier */}
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-[11px] text-blue-100">
              <span>Progress to Platinum (2,000 pts)</span>
              <span>{Math.round((rewardsPoints / 2000) * 100)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-blue-900/50 overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (rewardsPoints / 2000) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Redeemable Rewards list */}
        <div className="p-6 space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Available Rewards
          </h4>

          <div className="space-y-3">
            {[
              {
                id: 'r1',
                title: '₹250 Off Voucher',
                cost: 500,
                desc: 'Valid on orders over ₹1,499'
              },
              {
                id: 'r2',
                title: 'Free Express Shipping For 1 Year',
                cost: 750,
                desc: 'Enjoy free fast delivery with no minimum order value'
              },
              {
                id: 'r3',
                title: '₹500 Off Voucher',
                cost: 1000,
                desc: 'Valid on all Men, Women & Accessories orders over ₹2,499'
              }
            ].map((reward) => (
              <div
                key={reward.id}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-500 shrink-0">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      {reward.title}
                    </h5>
                    <p className="text-[11px] text-slate-500">{reward.desc}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRedeem(reward.cost, reward.title)}
                  disabled={rewardsPoints < reward.cost}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    rewardsPoints >= reward.cost
                      ? 'bg-[#1A73E8] hover:bg-blue-700 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {rewardsPoints >= reward.cost ? `Redeem (${reward.cost} pts)` : `${reward.cost} pts`}
                </button>
              </div>
            ))}
          </div>

          {/* How to earn */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>How to Earn Points</span>
            </h5>
            <ul className="space-y-1 text-slate-500 dark:text-slate-400 text-[11px]">
              <li>✦ Earn 1 reward point for every ₹10 spent on Google Apparels.</li>
              <li>✦ Earn 250 bonus points on writing verified product reviews.</li>
              <li>✦ Receive 500 birthday points every year automatically.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
