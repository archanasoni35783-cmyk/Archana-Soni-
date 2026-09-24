import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturesBar } from './components/FeaturesBar';
import { HomeSections } from './components/HomeSections';
import { CategoryView } from './components/CategoryView';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { RewardsModal } from './components/RewardsModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { activeTab, toastMessage } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors font-sans antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-700 dark:border-slate-200 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main App Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero />
            <FeaturesBar />
            <HomeSections />
          </>
        )}

        {activeTab === 'men' && (
          <CategoryView
            category="men"
            title="Men's Apparel Collection"
            subtitle="Modern streetwear tees, premium polo shirts, comfort denims and signature hoodies."
          />
        )}

        {activeTab === 'women' && (
          <CategoryView
            category="women"
            title="Women's Apparel Collection"
            subtitle="Contemporary kurtis, elegant tops, wide-leg denims, festive sarees and hoodies."
          />
        )}

        {activeTab === 'accessories' && (
          <CategoryView
            category="accessories"
            title="Fashion Accessories"
            subtitle="Premium watches, tote bags, utility backpacks, caps, and crafted jewelry."
          />
        )}

        {activeTab === 'new-arrivals' && (
          <CategoryView
            filterType="new"
            title="New Season Arrivals"
            subtitle="Be the first to wear Google's latest styles and freshly dropped apparel."
          />
        )}

        {activeTab === 'best-sellers' && (
          <CategoryView
            filterType="bestsellers"
            title="Best Sellers"
            subtitle="Customer favorite picks with verified 4.8+ ratings and highest demand."
          />
        )}

        {activeTab === 'sale' && (
          <CategoryView
            filterType="sale"
            title="Flash Sale &amp; Discounts"
            subtitle="Up to 50% Off on select authentic Google hoodies, shirts, sarees, and accessories."
          />
        )}
      </main>

      {/* Modals and Drawers */}
      <CartDrawer />
      <WishlistDrawer />
      <ProductDetailsModal />
      <RewardsModal />
      <SizeGuideModal />
      <CheckoutModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
