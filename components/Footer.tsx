export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-gray-500 mt-auto border-t border-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="font-bold text-white">
              CCIP <span className="text-[#375BD2]">Index</span>
            </span>
            <p className="mt-1 text-xs leading-relaxed max-w-sm">
              A public index tracking verified migrations to Chainlink CCIP. Not affiliated with Chainlink Labs.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-xs">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/migration-tracker" className="hover:text-white transition-colors">Migration Tracker</a>
            <a
              href="https://github.com/Korner-san/ccip-index"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
        <p className="mt-6 text-[11px] text-gray-600">
          For research purposes only. Not financial advice. Data compiled from public sources and may be incomplete.
        </p>
      </div>
    </footer>
  );
}
