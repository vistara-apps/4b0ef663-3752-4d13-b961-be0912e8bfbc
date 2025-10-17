'use client';

import { useState } from 'react';
import { TrendingUp, Lock, Copy, Receipt, ChevronLeft } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { TradeCard } from './components/TradeCard';
import { PostTradeModal } from './components/PostTradeModal';

export default function Home() {
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<string | null>(null);

  const mockTrades = [
    {
      id: '1',
      trader: {
        fid: '9152',
        username: 'cryptowhale',
        displayName: 'Crypto Whale',
        pfpUrl: '/avatar1.png',
        reputationScore: 95,
      },
      asset: 'ETH/USD',
      entryPrice: 2450.00,
      exitPrice: 2695.00,
      pnlPercentage: 10.0,
      timestamp: new Date('2024-01-15T10:30:00'),
      feeAmount: 0.01,
      isVerified: true,
      isLocked: true,
    },
    {
      id: '2',
      trader: {
        fid: '8234',
        username: 'defimaster',
        displayName: 'DeFi Master',
        pfpUrl: '/avatar2.png',
        reputationScore: 88,
      },
      asset: 'BTC/USD',
      entryPrice: 42000.00,
      exitPrice: 45150.00,
      pnlPercentage: 7.5,
      timestamp: new Date('2024-01-15T09:15:00'),
      feeAmount: 0.01,
      isVerified: true,
      isLocked: false,
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">TinyTrade</h1>
                <p className="text-xs text-fg/60">Socialized micro-trading</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-fg mb-4">
            Discover Verified Trades
          </h2>
          <p className="text-lg text-fg/70 mb-8 max-w-2xl mx-auto">
            Share, discover, and monetize verified micro-trades from Hyperliquid within a Farcaster-native social context.
          </p>
          <button
            onClick={() => setShowPostModal(true)}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-button"
          >
            Post Your Trade
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface border border-white/10 rounded-lg p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">Unlock P&L</h3>
            <p className="text-sm text-fg/60">
              Pay a micro-fee to unlock detailed P&L and trade insights from verified traders.
            </p>
          </div>

          <div className="bg-surface border border-white/10 rounded-lg p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Copy className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">Copy Trades</h3>
            <p className="text-sm text-fg/60">
              One-click trade copying to learn from successful strategies and execute instantly.
            </p>
          </div>

          <div className="bg-surface border border-white/10 rounded-lg p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
              <Receipt className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-fg mb-2">ERC-8004 Receipts</h3>
            <p className="text-sm text-fg/60">
              Immutable onchain verification for every trade unlock and copy action.
            </p>
          </div>
        </div>

        {/* Trades Feed */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-fg">Recent Trades</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockTrades.map((trade) => (
              <TradeCard
                key={trade.id}
                trade={trade}
                onUnlock={() => setSelectedTrade(trade.id)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Post Trade Modal */}
      {showPostModal && (
        <PostTradeModal onClose={() => setShowPostModal(false)} />
      )}
    </div>
  );
}
