# TinyTrade - Socialized Micro-Trading on Base

A Base Mini App that enables users to share, discover, and monetize verified micro-trades from Hyperliquid within a Farcaster-native social context.

## Features

- 🔒 **Verified Trade Sharing**: Post and monetize successful Hyperliquid trades
- 📊 **P&L Unlocking**: Pay micro-fees to unlock detailed trade insights
- 📋 **One-Click Copy**: Instantly replicate successful trading strategies
- 🧾 **ERC-8004 Receipts**: Immutable onchain verification via Vistara
- 🎯 **Farcaster Integration**: Native social features and discovery

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS (Coinbase theme)
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/
│   ├── Providers.tsx       # OnchainKit + React Query providers
│   ├── ConnectWallet.tsx   # Wallet connection component
│   ├── TradeCard.tsx       # Trade display card
│   └── PostTradeModal.tsx  # Trade posting modal
├── page.tsx                # Main landing page
├── layout.tsx              # Root layout with metadata
├── globals.css             # Global styles + Coinbase theme
├── loading.tsx             # Loading state
└── error.tsx               # Error boundary

public/
└── .well-known/
    └── farcaster.json      # Farcaster manifest
```

## Key Components

### TradeCard
Displays trade information with locked/unlocked states:
- Trader identity and reputation
- Asset and price details
- P&L percentage (locked/unlocked)
- Action buttons (Unlock/Copy)

### PostTradeModal
Modal for traders to post new trades:
- Asset selection
- Entry/exit price inputs
- Fee configuration
- ERC-8004 receipt info

### ConnectWallet
Wallet connection button using OnchainKit

## Theming

The app uses the **Coinbase theme** with:
- Dark navy background (`hsl(220, 26%, 14%)`)
- Light text (`hsl(210, 20%, 98%)`)
- Coinbase blue accents (`#0052ff`)
- Subtle rounded borders

CSS variables are defined in `globals.css` and mapped to Tailwind utilities.

## Deployment

1. Build the production app:
```bash
npm run build
```

2. Deploy to Vercel, Netlify, or your preferred platform

3. Ensure environment variables are set in production

4. Update the Farcaster manifest URLs in `public/.well-known/farcaster.json`

## License

MIT
