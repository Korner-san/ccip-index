import Link from 'next/link';
import { latestChanges, migrations } from '@/lib/data';

const valueCards = [
  {
    title: 'Migration Signals',
    description:
      'Every entry tracks a project moving away from an existing interoperability provider — LayerZero, Wormhole, Axelar, Stargate, or a native bridge — to Chainlink CCIP.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    ),
  },
  {
    title: 'Source-Backed Evidence',
    description:
      'Each record links to a primary source. Certainty ratings tell you whether the evidence is an official announcement, documentation, on-chain data, or an unverified signal.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Interoperability Provider Shifts',
    description:
      'See which providers projects are moving from and to. The index surfaces provider-level patterns across DeFi, RWA, BTCFi, and infrastructure sectors.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const liveCount = migrations.filter((m) => m.status === 'Live').length;
  const migrationCount = migrations.filter((m) => m.from !== 'None').length;
  const highCertainty = migrations.filter((m) => m.certainty === 'High').length;

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            CCIP <span className="text-[#375BD2]">Index</span>
          </h1>
          <p className="text-xl text-gray-200 mb-5 font-medium">
            Track verified migrations to Chainlink CCIP.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A public index of projects moving from LayerZero and other interoperability providers
            to Chainlink CCIP — with source links, migration status, and evidence quality ratings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/migration-tracker"
              className="bg-[#375BD2] hover:bg-[#0052FF] text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-sm"
            >
              View Migration Tracker
            </Link>
            <Link
              href="/metrics"
              className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
            >
              Market Map
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#0A2540] border-t border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: String(migrations.length), label: 'Tracked Entries' },
            { value: String(migrationCount), label: 'Provider Migrations' },
            { value: String(liveCount), label: 'Live on CCIP' },
            { value: String(highCertainty), label: 'High-Certainty Records' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-[#375BD2]">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Value Cards */}
      <section className="bg-[#F5F6FA] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0A2540] text-center mb-2">
            What This Index Tracks
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            CCIP Index is not a general Chainlink dashboard. It tracks one thing: who moved, from what, to CCIP, and what the evidence says.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-base font-semibold text-[#0A2540] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Migration Signals */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0A2540]">Latest Migration Signals</h2>
              <p className="text-gray-400 text-sm mt-1">Most recently confirmed or announced moves.</p>
            </div>
            <Link href="/migration-tracker" className="text-[#375BD2] text-sm font-medium hover:underline whitespace-nowrap">
              Full tracker &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {latestChanges.map((change) => (
              <div
                key={change.id}
                className="border border-gray-100 rounded-lg p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 hover:shadow-sm transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-[#0A2540] text-sm">{change.project}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-500 border border-gray-200">
                      {change.from} &rarr; CCIP
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{change.update}</p>
                </div>
                <span className="text-gray-400 text-xs whitespace-nowrap tabular-nums">{change.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
