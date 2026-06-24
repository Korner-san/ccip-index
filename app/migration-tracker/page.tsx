import { migrations, emergingSignals } from '@/lib/data';
import MigrationTable from '@/components/MigrationTable';

export const metadata = {
  title: 'Migration Tracker — CCIP Index',
};

export default function MigrationTrackerPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Migration Tracker</h1>
          <p className="text-gray-300 max-w-2xl">
            Projects verified to have migrated from LayerZero and other interoperability providers
            to Chainlink CCIP, with primary source links.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-6">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Filter by
            </span>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Previous Providers</option>
              <option>LayerZero</option>
              <option>Wormhole</option>
              <option>Axelar</option>
              <option>Stargate</option>
              <option>Native Bridge</option>
              <option>None</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Statuses</option>
              <option>Live</option>
              <option>Announced</option>
              <option>In Progress</option>
              <option>Old Infra Deprecated</option>
              <option>Unverified</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Certainty Levels</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <span className="text-xs text-gray-400 ml-auto hidden sm:inline">
              Filters are visual in this MVP
            </span>
          </div>
        </div>

        {/* Legend — above the tables */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 space-y-5">
          {/* Source Tier legend */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Source Tier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20">
                  Tier 1
                </span>
                <span>Official first-party source: project blog, press release, or Chainlink publication. Highest confidence.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                  Tier 2
                </span>
                <span>Reputable media outlet or secondary reporting with strong corroboration. No direct first-party confirmation found.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-orange-50 text-orange-600 border border-orange-100">
                  Tier 3
                </span>
                <span>Early or unverified signal. Social media, community reports, or claims without a traceable primary source.</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Certainty legend */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Certainty Scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-green-50 text-green-700 border border-green-100">
                  High
                </span>
                <span>Official announcement, verified documentation, on-chain evidence, or Chainlink-published source.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                  Medium
                </span>
                <span>Reputable secondary reporting or explorer evidence without direct first-party confirmation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-red-50 text-red-600 border border-red-100">
                  Low
                </span>
                <span>Early signals, social posts, or incomplete verification. Listed for transparency only.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified migrations table */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-lg font-bold text-[#0A2540]">Verified Migrations</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100 font-semibold">
              {migrations.length} entries
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <MigrationTable rows={migrations} />
            <div className="px-4 py-3 border-t border-gray-100 bg-[#F5F6FA] text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>{migrations.length} entries &middot; Sorted by date desc</span>
              <span>Last updated 2026-06-24</span>
            </div>
          </div>
        </div>

        {/* Emerging signals table */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-lg font-bold text-[#0A2540]">Emerging Migration Signals</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 font-semibold">
              {emergingSignals.length} entries
            </span>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 mb-3 text-xs text-amber-800 leading-relaxed">
            Entries in Emerging Migration Signals require additional first-party verification before
            being promoted to the verified migration index.
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden opacity-90">
            <MigrationTable rows={emergingSignals} dim />
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>{emergingSignals.length} entries &middot; Secondary reporting only</span>
              <span>Pending first-party confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
