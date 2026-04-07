import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-display text-charcoal mb-4">404</h1>
        <h2 className="text-2xl font-heading text-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-warm-gray mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-teal text-white rounded-lg shadow-retro hover:shadow-retro-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
