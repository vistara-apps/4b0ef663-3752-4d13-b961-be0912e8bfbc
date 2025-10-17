'use client';

import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  return (
    <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 flex items-center gap-2 shadow-button">
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  );
}
