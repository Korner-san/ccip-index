import { migrations, emergingSignals } from '@/lib/data';

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    'Live':                 'bg-green-50 text-green-700 border border-green-100',
    'Announced':            'bg-sky-50 text-sky-700 border border-sky-100',
    'In Progress':          'bg-amber-50 text-amber-700 border border-amber-100',
    'Old Infra Deprecated': 'bg-slate-100 text-slate-500 border border-slate-200',
    'Unverified':           'bg-orange-50 text-orange-600 border border-orange-100',
  };
  return styles[status] ?? 'bg-gray-100 text-gray-500';
}

function evidenceTypeBadge(type: string) {
  const styles: Record<string, string> = {
    'Official Announcement': 'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Official Docs':         'bg-indigo-50 text-indigo-700 border border-indigo-100',
    'Smart Contract':        'bg-purple-50 text-purple-700 border border-purple-100',
    'Explorer Data':         'bg-teal-50 text-teal-700 border border-teal-100',
    'Chainlink Source':      'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Media Report':          'bg-slate-50 text-slate-600 border border-slate-200',
    'Secondary Reporting':   'bg-slate-50 text-slate-500 border border-slate-200',
    'Social Post':           'bg-gray-50 text-gray-500 border border-gray-200',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-500';
}

function certaintyBadge(certainty: string) {
  const styles: Record<string, string> = {
    High:   'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-amber-50 text-amber-700 border border-amber-100',
    Low:    'bg-red-50 text-red-600 border border-red-100',
  };
  return styles[certainty] ?? 'bg-gray-100 text-gray-500';
}

function MigrationTable({
  rows,
  dim = false,
}: {
  rows: typeof migrations;
  dim?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" style={{ minWidth: '960px' }}>
        <thead>
          <tr className={`border-b border-gray-100 ${dim ? 'bg-gray-50' : 'bg-[#F5F6FA]'} text-[#0A2540]`}>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Project</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">From</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">To</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Status</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Announced</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ minWidth: '200px' }}>Reason</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Evidence Type</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Source</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Certainty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-50 hover:bg-[#F5F6FA]/60 transition-colors"
            >
              <td className="px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                {row.project}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`text-xs font-medium ${row.from === 'None' ? 'text-gray-400 italic' : 'text-gray-600'}`}>
                  {row.from}
                </span>
              </td>
              <td className="px-4 py-3 text-[#375BD2] font-medium whitespace-nowrap text-xs">
                {row.to}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap tabular-nums">
                {row.announced}
              </td>
              <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed">
                {row.reason}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${evidenceTypeBadge(row.evidenceType)}`}>
                  {row.evidenceType}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {row.source === '#' ? (
                  <span className="text-gray-300 text-xs">—</span>
                ) : (
                  <a
                    href={row.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#375BD2] hover:underline text-xs font-medium"
                  >
                    View &rarr;
                  </a>
                )}
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${certaintyBadge(row.certainty)}`}>
                  {row.certainty}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
            Projects verified to have migrated from LayerZero and other interoperability providers to Chainlink CCIP, with primary source links.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8 space-y-8">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Filter by</span>
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

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 mb-3 text-xs text-amber-800 leading-relaxed">
            Entries in Emerging Migration Signals require additional first-party verification before being promoted to the verified migration index.
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden opacity-90">
            <MigrationTable rows={emergingSignals} dim />
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>{emergingSignals.length} entries &middot; Secondary reporting only</span>
              <span>Pending first-party confirmation</span>
            </div>
          </div>
        </div>

        {/* Certainty legend */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Certainty Scale</p>
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-green-50 text-green-700 border border-green-100">High</span>
              <span>Official announcement, verified documentation, on-chain evidence, or Chainlink-published source.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-amber-50 text-amber-700 border border-amber-100">Medium</span>
              <span>Reputable secondary reporting or explorer evidence without direct first-party confirmation.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded-full font-semibold bg-red-50 text-red-600 border border-red-100">Low</span>
              <span>Early signals, social posts, or incomplete verification. Listed for transparency only.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
