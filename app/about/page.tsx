export const metadata = {
  title: 'About — CCIP Index',
};

export default function AboutPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">About CCIP Index</h1>
          <p className="text-gray-300">Mission, methodology, and transparency.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        {/* What we track */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-3">What CCIP Index Tracks</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            CCIP Index tracks projects that have adopted Chainlink CCIP as their cross-chain messaging
            or token bridge infrastructure. This includes projects migrating from existing solutions
            such as LayerZero, Wormhole, Axelar, or Hyperlane, as well as new projects choosing CCIP
            as their primary interoperability layer.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            For each record, we capture: project name, sector, asset involved, previous infrastructure,
            new infrastructure, the type of change, announcement date, stated reason, a confidence
            rating, and a link to supporting evidence.
          </p>
        </section>

        {/* What we don't claim */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-3">What CCIP Index Does Not Claim</h2>
          <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5 flex-shrink-0">&#8212;</span>
              <span>CCIP Index is not affiliated with Chainlink Labs or Smartcontract.com.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5 flex-shrink-0">&#8212;</span>
              <span>CCIP Index does not guarantee the completeness of its data.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5 flex-shrink-0">&#8212;</span>
              <span>CCIP Index does not provide investment advice of any kind.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5 flex-shrink-0">&#8212;</span>
              <span>
                CCIP Index does not verify the financial performance or viability of any tracked
                project.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5 flex-shrink-0">&#8212;</span>
              <span>
                Migration records reflect publicly available information, not insider knowledge.
              </span>
            </li>
          </ul>
        </section>

        {/* Confidence methodology */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">Confidence Methodology</h2>
          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 h-fit">
                High
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Official project announcement or official Chainlink source. The project or Chainlink
                itself has publicly confirmed the integration or migration.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-100 h-fit">
                Medium
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Official documentation, deployed contracts, block explorer data, or strong secondary
                reporting. The evidence is solid but not a direct first-party statement.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200 h-fit">
                Low
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Social media signals, community reports, or unverified early information. Listed for
                transparency but should not be acted upon without further verification.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-[#0A2540] text-white rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Disclaimer</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            CCIP Index is for research and information only. It is not financial advice. Data
            presented on this site is compiled from public sources and may be incomplete or subject
            to change. Always conduct your own due diligence before making any investment or protocol
            decisions.
          </p>
        </section>
      </div>
    </main>
  );
}
