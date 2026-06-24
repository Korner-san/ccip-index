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
          <p className="text-gray-300">What this index is, what it tracks, and how it works.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-5">

        {/* Mission */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-3">What CCIP Index Is</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            CCIP Index exists to track interoperability provider shifts — specifically, projects moving
            from LayerZero, Wormhole, Axelar, Stargate, native bridges, or other cross-chain systems
            to Chainlink CCIP.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            This is not a general Chainlink dashboard. It is not a CCIP metrics tool. The core value
            is narrow and specific: <strong className="text-[#0A2540]">who moved, from what, to CCIP, when, why, and what evidence proves it.</strong>
          </p>
        </section>

        {/* What it tracks */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-3">What Gets Tracked</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Each entry in the Migration Tracker captures the following:
          </p>
          <ul className="text-gray-500 text-sm space-y-2">
            {[
              ['Project', 'The protocol, token, chain, or company making the change.'],
              ['From', 'The previous interoperability provider being replaced or supplemented.'],
              ['To', 'The new provider — usually Chainlink CCIP.'],
              ['Status', 'Whether the migration is announced, in progress, live, or unverified.'],
              ['Announced', 'The date of the first public signal or confirmation.'],
              ['Reason', 'The stated reason for the migration, sourced directly from public materials.'],
              ['Evidence Type', 'The category of source — announcement, docs, on-chain data, or media.'],
              ['Source', 'A direct link to the primary evidence.'],
              ['Certainty', 'An editorial rating of how well the claim is supported.'],
            ].map(([field, def]) => (
              <li key={field} className="flex gap-2">
                <span className="font-semibold text-[#0A2540] flex-shrink-0 w-24">{field}</span>
                <span>{def}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What it doesn't claim */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-3">What CCIP Index Does Not Claim</h2>
          <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
            {[
              'CCIP Index is not affiliated with Chainlink Labs or Smartcontract.com.',
              'CCIP Index does not guarantee the completeness of its data.',
              'CCIP Index does not provide investment or financial advice.',
              'Migration records reflect publicly available information only — not insider knowledge.',
              'Entries with Low or Unverified status are included for transparency, not as confirmed facts.',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-gray-300 flex-shrink-0 mt-0.5">&#8212;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Certainty methodology */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">Certainty Methodology</h2>
          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100 h-fit">
                High
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Official project announcement, official Chainlink publication, or verified on-chain
                evidence. The migration has been directly confirmed by a first-party source.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100 h-fit">
                Medium
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reputable secondary reporting, official documentation referencing CCIP, or block
                explorer data. The evidence is solid but does not include a direct first-party
                confirmation of the migration itself.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100 h-fit">
                Low
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                Social media signals, community-sourced claims, or early unverified reports.
                Listed for completeness but should not be treated as confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-[#0A2540] text-white rounded-lg p-6">
          <h2 className="text-lg font-bold mb-2">Disclaimer</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            CCIP Index is for research and information purposes only. It is not financial advice.
            All data is compiled from public sources, may be incomplete, and is subject to change.
            Do not make investment or protocol decisions based solely on information presented here.
          </p>
        </section>

      </div>
    </main>
  );
}
