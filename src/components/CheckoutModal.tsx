import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Banknote, ArrowRight, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Order } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    subtotal,
    discountAmount,
    shippingFee,
    totalAmount,
    placeOrder,
    formatPrice,
    showToast
  } = useShop();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: 'Alex Morgan',
    phone: '+91 98765 43210',
    street: '42 Prestige Tech Park, Marathahalli Ring Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    pinCode: '560103'
  });

  const [paymentMethod, setPaymentMethod] = useState<string>('gpay');

  if (!isCheckoutOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      if (!formData.fullName || !formData.phone || !formData.street || !formData.pinCode) {
        showToast('Please fill out all address fields');
        return;
      }
      setStep('payment');
    } else if (step === 'payment') {
      const order = placeOrder(formData, paymentMethod);
      setCompletedOrder(order);
      setStep('confirmed');
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
    setCompletedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-auto">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>{' '}
              <span className="text-slate-900 dark:text-white">Pay &amp; Checkout</span>
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {step === 'details' && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span>1. Shipping Address</span>
                </h3>
                <span className="text-xs text-slate-400">Step 1 of 2</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Street Address &amp; Flat/Floor *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    State &amp; PIN Code *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                    />
                    <input
                      type="text"
                      required
                      value={formData.pinCode}
                      onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500">Order Subtotal</span>
                  <p className="text-base font-bold text-slate-900 dark:text-white tabular-nums">
                    {formatPrice(totalAmount)}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>2. Select Payment Method</span>
                </h3>
                <span className="text-xs text-slate-400">Step 2 of 2</span>
              </div>

              <div className="space-y-3">
                {/* Google Pay / UPI */}
                <label
                  onClick={() => setPaymentMethod('gpay')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'gpay'
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        Google Pay / UPI Instant
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Pay using GPay, PhonePe, Paytm or UPI ID
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center">
                    {paymentMethod === 'gpay' && (
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                </label>

                {/* Credit / Debit Card */}
                <label
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        Credit / Debit Card
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Visa, Mastercard, RuPay &amp; Amex accepted
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center">
                    {paymentMethod === 'card' && (
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 ring-2 ring-blue-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600">
                      <Banknote className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        Cash on Delivery (COD)
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Pay cash or UPI directly upon doorstep delivery
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border border-blue-600 flex items-center justify-center">
                    {paymentMethod === 'cod' && (
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                </label>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>256-bit encrypted checkout with Google Security verification</span>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-xs font-semibold text-slate-500 hover:underline cursor-pointer"
                >
                  ← Back to Address
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  Place Order · {formatPrice(totalAmount)}
                </button>
              </div>
            </form>
          )}

          {step === 'confirmed' && completedOrder && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-400 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs text-slate-500">
                  Your order <span className="font-mono font-bold text-blue-600">{completedOrder.id}</span> has been confirmed.
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-left text-xs space-y-2 border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between font-semibold text-slate-700 dark:text-slate-300">
                  <span>Estimated Delivery</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Within 2 business days</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping Address</span>
                  <span className="truncate max-w-[200px]">{completedOrder.shippingAddress.city}, {completedOrder.shippingAddress.pinCode}</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 dark:text-white pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span>Amount Paid</span>
                  <span className="tabular-nums">{formatPrice(completedOrder.total)}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded-xl bg-[#1A73E8] hover:bg-blue-700 text-white text-xs font-bold transition-all"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
