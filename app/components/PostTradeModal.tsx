'use client';

import { useState } from 'react';
import { X, TrendingUp } from 'lucide-react';

interface PostTradeModalProps {
  onClose: () => void;
}

export function PostTradeModal({ onClose }: PostTradeModalProps) {
  const [formData, setFormData] = useState({
    asset: '',
    entryPrice: '',
    exitPrice: '',
    feeAmount: '0.01',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trade posting logic
    console.log('Posting trade:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface border border-white/10 rounded-lg max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-fg">Post Trade</h2>
          </div>
          <button
            onClick={onClose}
            className="text-fg/60 hover:text-fg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-fg/80 mb-2">
              Asset
            </label>
            <input
              type="text"
              placeholder="Enter ₹10, $0.001"
              value={formData.asset}
              onChange={(e) => setFormData({ ...formData, asset: e.target.value })}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fg/80 mb-2">
              Entry Price
            </label>
            <input
              type="number"
              placeholder="0.00"
              value={formData.entryPrice}
              onChange={(e) => setFormData({ ...formData, entryPrice: e.target.value })}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fg/80 mb-2">
              Exit Price
            </label>
            <input
              type="number"
              placeholder="0.00"
              value={formData.exitPrice}
              onChange={(e) => setFormData({ ...formData, exitPrice: e.target.value })}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Payment Info */}
          <div className="bg-bg/50 rounded-lg p-4 space-y-2">
            <div className="text-sm font-medium text-fg/80">Payment</div>
            <div className="text-lg font-bold text-fg">
              ₹ ₹1 or $0.01
            </div>
            <div className="text-sm text-fg/60">via x 402</div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Post Trade
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2" />
              <div>
                <div className="text-sm font-medium text-fg">Copy in trade</div>
                <div className="text-xs text-fg/60 mt-1">
                  ERC 8004 receipt select your custom settered to our trade copy on trade.
                </div>
              </div>
            </div>
            <div className="bg-bg/50 rounded-lg p-3 text-center">
              <div className="text-sm font-medium text-fg">ERC-8004 receipt stored on Vistara</div>
              <div className="text-xs text-fg/60 mt-1">Data blending your data nodes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
