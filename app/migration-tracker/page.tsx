import { migrations } from '@/lib/data';

function changeTypeBadge(type: string) {
  const styles: Record<string, string> = {
    Migration:  'bg-blue-50 text-[#375BD2] border border-blue-100',
    Adoption:   'bg-purple-50 text-purple-700 border border-purple-100',
    Expansion:  'bg-teal-50 text-teal-700 border border-teal-100',
    Evaluation: 'bg-gray-50 text-gray-500 border border-gray-200',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-500';
}

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    'Live':                 'bg-green-50 text-green-700 border border-green-100',
    'Announced':            'bg-sky-50 text-sky-700 border border-sky-100',
    'In Progress':          'bg-amber-50 text-amber-700 border border-amber-100',
    'Deprecated Old Infra': 'bg-slate-100 text-slate-500 border border-slate-200',
    'Unverified':           'bg-orange-50 text-orange-600 border border-orange-100',
  };
  return styles[status] ?? 'bg-gray-100 text-gray-500';
}

function evidenceTypeBadge(type: string) {
  const styles: Record<string, string> = {
    'Official Announcement':  'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Official Documentation': 'bg-indigo-50 text-indigo-700 border border-indigo-100',
    'Smart Contract':         'bg-purple-50 text-purple-700 border border-purple-100',
    'Explorer Data':          'bg-teal-50 text-teal-700 border border-teal-100',
    'Chainlink Source':       'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Media Report':           'bg-slate-50 text-slate-600 border border-slate-200',
    'Social Post':            'bg-gray-50 text-gray-500 border border-gray-200',
    'Multiple Sources':       'bg-violet-50 text-violet-700 border border-violet-100',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-500';
}

function evidenceLevelBadge(level: string) {
  const styles: Record<string, string> = {
    High:   'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-amber-50 text-amber-700 border border-amber-100',
    Low:    'bg-red-50 text-red-600 border border-red-100',
  };
  return styles[level] ?? 'bg-gray-100 text-gray-500';
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
          <p className="text-gray-300">
            Verified cross-chain migrations and CCIP adoptions with evidence classification and status tracking.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Filter by
            </span>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Sectors</option>
              <option>Agent Economy</option>
              <option>BTCFi</option>
              <option>DeFi</option>
              <option>Infrastructure</option>
              <option>L1</option>
              <option>RWA</option>
              <option>Stablecoin</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Change Types</option>
              <option>Migration</option>
              <option>Adoption</option>
              <option>Expansion</option>
              <option>Evaluation</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Statuses</option>
              <option>Live</option>
              <option>Announced</option>
              <option>In Progress</option>
              <option>Deprecated Old Infra</option>
              <option>Unverified</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Evidence Levels</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <span className="text-xs text-gray-400 ml-auto hidden sm:inline">
              Filters are visual in this MVP
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ minWidth: '1100px' }}>
              <thead>
                <tr className="bg-[#F5F6FA] border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Project</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Sector</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Asset</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">From</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">To</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Change Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Announced</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540]" style={{ minWidth: '180px' }}>Stated Reason</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Evidence Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Evidence Level</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Source</th>
                </tr>
              </thead>
              <tbody>
                {migrations.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-50 hover:bg-[#F5F6FA]/60 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                      {row.project}
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                      {row.sector}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600 whitespace-nowrap">
                      {row.asset}
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                      {row.from}
                    </td>
                    <td className="px-4 py-3 text-[#375BD2] font-medium whitespace-nowrap text-xs">
                      {row.to}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${changeTypeBadge(row.changeType)}`}>
                        {row.changeType}
                      </span>
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
                      {row.statedReason}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${evidenceTypeBadge(row.evidenceType)}`}>
                        {row.evidenceType}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${evidenceLevelBadge(row.evidenceLevel)}`}>
                        {row.evidenceLevel}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a
                        href={row.source}
                        className="text-[#375BD2] hover:underline text-xs font-medium"
                      >
                        View &rarr;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 bg-[#F5F6FA] text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
            <span>{migrations.length} records &middot; Sorted by date desc</span>
            <span>Last updated 2026-06-24 &middot; Mock data MVP</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Evidence Level Legend</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold bg-green-50 text-green-700 border border-green-100">High</span>
              <span>Official announcement, documentation, verified on-chain, or multiple confirmations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold bg-amber-50 text-amber-700 border border-amber-100">Medium</span>
              <span>Reputable secondary sources or explorer evidence without direct confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full font-semibold bg-red-50 text-red-600 border border-red-100">Low</span>
              <span>Early signals, social posts, or incomplete verification</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
