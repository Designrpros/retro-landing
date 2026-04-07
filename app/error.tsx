"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-display text-charcoal mb-4">
          Something went wrong
        </h2>
        <p className="text-warm-gray mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-coral text-white rounded-lg shadow-retro hover:shadow-retro-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
