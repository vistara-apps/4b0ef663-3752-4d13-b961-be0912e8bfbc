'use client';

import { Lock, TrendingUp, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

interface Trade {
  id: string;
  trader: {
    fid: string;
    username: string;
    displayName: string;
    pfpUrl: string;
    reputationScore: number;
  };
  asset: string;
  entryPrice: number;
  exitPrice: number;
  pnlPercentage: number;
  timestamp: string;
  feeAmount: number;
  isVerified: boolean;
  isLocked: boolean;
}

interface TradeCardProps {
  trade: Trade;
}

export function TradeCard({ trade }: TradeCardProps) {
  const timeAgo = (timestamp: string) => {
    const seconds = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="bg-surface rounded-lg border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-200">
      {/* Trader Info */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={trade.trader.pfpUrl}
            alt={trade.trader.displayName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-fg">{trade.trader.displayName}</span>
              {trade.isVerified && (
                <CheckCircle2 className="w-4 h-4 text-accent" />
              )}
            </div>
            <span className="text-sm text-fg/60">@{trade.trader.username}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-fg">Rep Score</div>
          <div className="text-lg font-bold text-accent">{trade.trader.reputationScore}</div>
        </div>
      </div>

      {/* Trade Details */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-fg">{trade.asset}</div>
            <div className="text-sm text-fg/60">{timeAgo(trade.timestamp)}</div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            trade.pnlPercentage > 0 
              ? 'bg-success/10 text-success' 
              : 'bg-danger/10 text-danger'
          }`}>
            {trade.pnlPercentage > 0 ? '+' : ''}{trade.pnlPercentage.toFixed(2)}%
          </div>
        </div>

        {trade.isLocked ? (
          <div className="bg-bg rounded-lg p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-accent" />
              <span className="font-semibold text-fg">P&L Details Locked</span>
            </div>
            <p className="text-sm text-fg/70 mb-4">
              Unlock full trade details including entry/exit prices and copy this trade for just ${trade.feeAmount} USDC
            </p>
            <button className="w-full px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Unlock P&L & Copy Trade
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg rounded-lg p-3">
                <div className="text-xs text-fg/60 mb-1">Entry Price</div>
                <div className="text-lg font-bold text-fg">${trade.entryPrice.toLocaleString()}</div>
              </div>
              <div className="bg-bg rounded-lg p-3">
                <div className="text-xs text-fg/60 mb-1">Exit Price</div>
                <div className="text-lg font-bold text-fg">${trade.exitPrice.toLocaleString()}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2">
                <Copy className="w-4 h-4" />
                Copy Trade
              </button>
              <button className="px-4 py-3 bg-surface border border-white/10 text-fg rounded-lg font-semibold hover:bg-surface/80 transition-all duration-200 flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
