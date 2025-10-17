'use client';

import { useState } from 'react';
import { TrendingUp, Lock, Copy, Receipt, ChevronRight, Sparkles } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { TradeCard } from './components/TradeCard';
import { PostTradeModal } from './components/PostTradeModal';

export default function Home() {
  const [showPostModal, setShowPostModal] = useState(false);

  // Mock trades data
  const mockTrades = [
    {
      id: '1',
      trader: {
        fid: '9152',
        username: 'cryptowhale',
        displayName: 'Crypto Whale',
        pfpUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=whale',
        reputationScore: 95,
      },
      asset: 'ETH/USD',
      entryPrice: 2450.50,
      exitPrice: 2695.75,
      pnlPercentage: 10.01,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
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
        pfpUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=defi',
        reputationScore: 88,
      },
      asset: 'BTC/USD',
      entryPrice: 42100.00,
      exitPrice: 43890.50,
      pnlPercentage: 4.25,
      timestamp: new Date(Date.now() - 7200000).toISOString(),
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Powered by Base & Hyperliquid</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
              Share Verified Trades,
              <br />
              <span className="text-accent">Earn from Your Alpha</span>
            </h2>
            <p className="text-lg text-fg/70 mb-8">
              Monetize your trading insights with micro-fees. Followers unlock P&L details and copy trades with one click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowPostModal(true)}
                className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 shadow-button flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Post Your Trade
              </button>
              <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-all duration-200 border border-white/10 flex items-center justify-center gap-2">
                Explore Trades
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">Verified Trades</h3>
            <p className="text-fg/70">
              All trades verified via Hyperliquid API. No fake signals, only real P&L.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Copy className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">One-Click Copy</h3>
            <p className="text-fg/70">
              Unlock P&L for $0.01 USDC and copy trades instantly with a single click.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Receipt className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">Onchain Receipts</h3>
            <p className="text-fg/70">
              Every unlock and copy recorded onchain via ERC-8004 for full transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Trades Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-fg">Recent Trades</h2>
          <button className="text-accent hover:text-accent/80 font-medium flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockTrades.map((trade) => (
            <TradeCard key={trade.id} trade={trade} />
          ))}
        </div>
      </section>

      {/* Post Trade Modal */}
      {showPostModal && (
        <PostTradeModal onClose={() => setShowPostModal(false)} />
      )}
    </div>
  );
}
