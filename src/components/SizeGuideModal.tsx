import React, { useState } from 'react';
import { X, Ruler } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [gender, setGender] = useState<'men' | 'women'>('men');

  if (!isSizeGuideOpen) return null;

  const menDataInches = [
    { size: 'XS', chest: '34 - 36', waist: '28 - 30', length: '27' },
    { size: 'S', chest: '36 - 38', waist: '30 - 32', length: '28' },
    { size: 'M', chest: '38 - 40', waist: '32 - 34', length: '29' },
    { size: 'L', chest: '40 - 42', waist: '34 - 36', length: '30' },
    { size: 'XL', chest: '42 - 44', waist: '36 - 38', length: '31' },
    { size: 'XXL', chest: '44 - 46', waist: '38 - 40', length: '32' }
  ];

  const womenDataInches = [
    { size: 'XS', bust: '31 - 33', waist: '24 - 26', hip: '34 - 36' },
    { size: 'S', bust: '33 - 35', waist: '26 - 28', hip: '36 - 38' },
    { size: 'M', bust: '35 - 37', waist: '28 - 30', hip: '38 - 40' },
    { size: 'L', bust: '37 - 39', waist: '30 - 32', hip: '40 - 42' },
    { size: 'XL', bust: '39 - 41', waist: '32 - 34', hip: '42 - 44' },
    { size: 'XXL', bust: '41 - 44', waist: '34 - 37', hip: '44 - 47' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={() => setIsSizeGuideOpen(false)} />

      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-auto">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Official Size Guide
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Toggle Switches */}
          <div className="flex items-center justify-between">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setGender('men')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  gender === 'men' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-500'
                }`}
              >
                Men
              </button>
              <button
                onClick={() => setGender('women')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  gender === 'women' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : 'text-slate-500'
                }`}
              >
                Women
              </button>
            </div>

            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
              <button
                onClick={() => setUnit('in')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  unit === 'in' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-400'
                }`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  unit === 'cm' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-400'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-3">Size</th>
                  {gender === 'men' ? (
                    <>
                      <th className="p-3">Chest ({unit})</th>
                      <th className="p-3">Waist ({unit})</th>
                      <th className="p-3">Length ({unit})</th>
                    </>
                  ) : (
                    <>
                      <th className="p-3">Bust ({unit})</th>
                      <th className="p-3">Waist ({unit})</th>
                      <th className="p-3">Hip ({unit})</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                {gender === 'men'
                  ? menDataInches.map((row) => (
                      <tr key={row.size} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-blue-600">{row.size}</td>
                        <td className="p-3">{row.chest}</td>
                        <td className="p-3">{row.waist}</td>
                        <td className="p-3">{row.length}</td>
                      </tr>
                    ))
                  : womenDataInches.map((row) => (
                      <tr key={row.size} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-bold text-blue-600">{row.size}</td>
                        <td className="p-3">{row.bust}</td>
                        <td className="p-3">{row.waist}</td>
                        <td className="p-3">{row.hip}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 text-xs text-slate-600 dark:text-slate-400 space-y-1">
            <span className="font-bold text-blue-700 dark:text-blue-300 block">Fit Advice:</span>
            <p>
              If your measurements fall between two sizes, we recommend sizing up for a relaxed fit or sizing down for an athletic fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
