# TinyTrade - Socialized Micro-Trading on Base

A Farcaster-native Mini App for sharing, discovering, and monetizing verified micro-trades from Hyperliquid.

## Features

- ✅ **Verified Trade Sharing**: Post Hyperliquid trades with API verification
- 🔒 **P&L Unlocking**: Monetize insights with micro-fees ($0.01 USDC)
- 📋 **One-Click Copy**: Followers can copy trades instantly
- 🧾 **Onchain Receipts**: ERC-8004 receipts via Vistara for transparency
- 🎯 **Farcaster Integration**: Native social features and discovery

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS (Coinbase theme)
- **Trading**: Hyperliquid API integration

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit + React Query providers
│   ├── ConnectWallet.tsx
│   ├── TradeCard.tsx
│   └── PostTradeModal.tsx
├── page.tsx            # Home page
├── layout.tsx          # Root layout
├── globals.css         # Global styles (Coinbase theme)
├── loading.tsx         # Loading state
└── error.tsx           # Error boundary

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Features Implementation

### Trade Verification
- Hyperliquid API integration for trade authenticity
- Real-time P&L calculation
- Reputation scoring system

### Payment Flow
- USDC micro-transactions ($0.01)
- Gas-sponsored transactions via Paymaster
- x402 payment integration

### Social Features
- Farcaster Frame embeds
- Notification system
- Trader profiles with reputation

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: OnchainKit API key
- `NEXT_PUBLIC_BASE_RPC_URL`: Base RPC endpoint
- `HYPERLIQUID_API_KEY`: Hyperliquid API key (optional)

## License

MIT
