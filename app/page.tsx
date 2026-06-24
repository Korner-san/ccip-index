import Link from 'next/link';
import { latestChanges } from '@/lib/data';

const valueCards = [
  {
    title: 'Verified Migrations',
    description:
      'Every migration record is backed by official announcements, on-chain evidence, or primary documentation before being listed.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Evidence-Backed Research',
    description:
      'Each entry cites its source. High-confidence records require an official project or Chainlink announcement.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Interoperability Trends',
    description:
      'Track which cross-chain protocols projects are moving toward and away from across DeFi, RWA, and infrastructure sectors.',
    icon: (
      <svg className="h-6 w-6 text-[#375BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            CCIP <span className="text-[#375BD2]">Index</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 font-medium">
            Tracking verified cross-chain migrations and Chainlink CCIP adoption.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            CCIP Index is a public intelligence dashboard for tracking which projects adopt Chainlink CCIP,
            what infrastructure they moved from, and what evidence supports each migration.
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
              Explore Metrics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[#0A2540] border-t border-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '5', label: 'Tracked Projects' },
            { value: '3', label: 'Verified Migrations' },
            { value: '4', label: 'High-Confidence Records' },
            { value: '4', label: 'Protocols Monitored' },
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
          <h2 className="text-2xl font-bold text-[#0A2540] text-center mb-10">
            What CCIP Index Tracks
          </h2>
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

      {/* Latest Changes */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0A2540]">Latest Changes</h2>
            <Link href="/migration-tracker" className="text-[#375BD2] text-sm font-medium hover:underline">
              View all &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {latestChanges.map((change) => (
              <div
                key={change.id}
                className="border border-gray-100 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-[#0A2540] text-sm">{change.project}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        change.type === 'Migration'
                          ? 'bg-blue-50 text-[#375BD2]'
                          : 'bg-green-50 text-green-700'
                      }`}
                    >
                      {change.type}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{change.update}</p>
                </div>
                <span className="text-gray-400 text-xs whitespace-nowrap">{change.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
