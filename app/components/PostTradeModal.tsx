'use client';

import { X, TrendingUp, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface PostTradeModalProps {
  onClose: () => void;
}

export function PostTradeModal({ onClose }: PostTradeModalProps) {
  const [asset, setAsset] = useState('');
  const [entryPrice, setEntryPrice] = useState('');
  const [exitPrice, setExitPrice] = useState('');
  const [feeAmount, setFeeAmount] = useState('0.01');

  const calculatePnL = () => {
    if (!entryPrice || !exitPrice) return 0;
    const entry = parseFloat(entryPrice);
    const exit = parseFloat(exitPrice);
    return ((exit - entry) / entry * 100).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-lg max-w-md w-full border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-fg">Post Trade</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-fg" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-fg mb-2">
              Asset Pair
            </label>
            <input
              type="text"
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              placeholder="e.g., ETH/USD"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-fg mb-2">
                Entry Price
              </label>
              <input
                type="number"
                value={entryPrice}
                onChange={(e) => setEntryPrice(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-fg mb-2">
                Exit Price
              </label>
              <input
                type="number"
                value={exitPrice}
                onChange={(e) => setExitPrice(e.target.value)}
                placeholder="0.00"
                className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {entryPrice && exitPrice && (
            <div className="bg-bg rounded-lg p-4 border border-white/10">
              <div className="text-sm text-fg/60 mb-1">Calculated P&L</div>
              <div className={`text-2xl font-bold ${
                parseFloat(calculatePnL()) > 0 ? 'text-success' : 'text-danger'
              }`}>
                {parseFloat(calculatePnL()) > 0 ? '+' : ''}{calculatePnL()}%
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-fg mb-2">
              Unlock Fee (USDC)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fg/40" />
              <input
                type="number"
                value={feeAmount}
                onChange={(e) => setFeeAmount(e.target.value)}
                step="0.01"
                min="0.01"
                className="w-full pl-10 pr-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder:text-fg/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <p className="text-xs text-fg/60 mt-2">
              Followers will pay this amount to unlock your P&L details
            </p>
          </div>

          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
            <p className="text-sm text-fg/80">
              <span className="font-semibold text-accent">Payment via x402:</span> ₹1 or $0.01 via x402
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-surface border border-white/10 text-fg rounded-lg font-semibold hover:bg-surface/80 transition-all duration-200"
          >
            Cancel
          </button>
          <button className="flex-1 px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 shadow-button">
            Post Trade
          </button>
        </div>
      </div>
    </div>
  );
}
