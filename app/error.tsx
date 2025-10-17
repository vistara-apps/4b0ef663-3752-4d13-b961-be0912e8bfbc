'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-fg mb-4">
          Something went wrong!
        </h2>
        <p className="text-fg/60 mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
