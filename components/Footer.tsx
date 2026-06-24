export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-lg text-white">
              CCIP <span className="text-[#375BD2]">Index</span>
            </span>
            <p className="mt-2 text-sm leading-relaxed">
              A public intelligence dashboard tracking Chainlink CCIP adoption and cross-chain migrations.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Navigation</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/migration-tracker" className="hover:text-white transition-colors">Migration Tracker</a></li>
              <li><a href="/metrics" className="hover:text-white transition-colors">Metrics & Comparisons</a></li>
              <li><a href="/research" className="hover:text-white transition-colors">Research & Insights</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="https://github.com/Korner-san/ccip-index" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#1a3a5c] text-xs text-gray-500">
          <p>CCIP Index is for research and information only. Not financial advice. All data is mock in this MVP.</p>
          <p className="mt-1">&copy; 2026 CCIP Index. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
