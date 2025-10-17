'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-danger" />
        </div>
        <h2 className="text-2xl font-bold text-fg mb-2">Something went wrong!</h2>
        <p className="text-fg/60 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
