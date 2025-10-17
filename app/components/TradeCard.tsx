'use client';

import { Lock, TrendingUp, CheckCircle, Copy } from 'lucide-react';

interface Trader {
  fid: string;
  username: string;
  displayName: string;
  pfpUrl: string;
  reputationScore: number;
}

interface Trade {
  id: string;
  trader: Trader;
  asset: string;
  entryPrice: number;
  exitPrice: number;
  pnlPercentage: number;
  timestamp: Date;
  feeAmount: number;
  isVerified: boolean;
  isLocked: boolean;
}

interface TradeCardProps {
  trade: Trade;
  onUnlock: () => void;
}

export function TradeCard({ trade, onUnlock }: TradeCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="bg-surface border border-white/10 rounded-lg p-6 hover:border-accent/50 transition-all duration-200">
      {/* Trader Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-semibold">
              {trade.trader.displayName.charAt(0)}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-fg">{trade.trader.displayName}</span>
              {trade.isVerified && (
                <CheckCircle className="w-4 h-4 text-accent" />
              )}
            </div>
            <span className="text-sm text-fg/60">@{trade.trader.username}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-fg/60">Reputation</div>
          <div className="font-semibold text-accent">{trade.trader.reputationScore}%</div>
        </div>
      </div>

      {/* Trade Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-fg/60">Asset</span>
          <span className="font-semibold text-fg">{trade.asset}</span>
        </div>
        
        {!trade.isLocked ? (
          <>
            <div className="flex items-center justify-between">
              <span className="text-fg/60">Entry</span>
              <span className="font-mono text-fg">{formatPrice(trade.entryPrice)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-fg/60">Exit</span>
              <span className="font-mono text-fg">{formatPrice(trade.exitPrice)}</span>
            </div>
          </>
        ) : (
          <div className="bg-bg/50 rounded-lg p-4 text-center">
            <Lock className="w-6 h-6 text-fg/40 mx-auto mb-2" />
            <p className="text-sm text-fg/60">P&L details locked</p>
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-fg/60">P&L</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="font-bold text-success">
              {trade.isLocked ? '???' : `+${trade.pnlPercentage}%`}
            </span>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-xs text-fg/40 mb-4">{formatDate(trade.timestamp)}</div>

      {/* Action Button */}
      {trade.isLocked ? (
        <button
          onClick={onUnlock}
          className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Unlock P&L for ${trade.feeAmount} USDC
        </button>
      ) : (
        <button className="w-full bg-success hover:bg-success/90 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2">
          <Copy className="w-4 h-4" />
          Copy Trade
        </button>
      )}
    </div>
  );
}
