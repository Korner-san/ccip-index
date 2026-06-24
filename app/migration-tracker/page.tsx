import { migrations } from '@/lib/data';

function confidenceBadge(confidence: string) {
  const styles: Record<string, string> = {
    High: 'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
    Low: 'bg-gray-100 text-gray-600 border border-gray-200',
  };
  return styles[confidence] ?? 'bg-gray-100 text-gray-600';
}

function changeTypeBadge(type: string) {
  const styles: Record<string, string> = {
    Migration: 'bg-blue-50 text-[#375BD2] border border-blue-100',
    Adoption: 'bg-purple-50 text-purple-700 border border-purple-100',
    Expansion: 'bg-teal-50 text-teal-700 border border-teal-100',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-600';
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
            Verified cross-chain migrations and CCIP adoptions, with evidence and confidence ratings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1">
              Filter by
            </span>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Categories</option>
              <option>AI / Agents</option>
              <option>BTC / DeFi</option>
              <option>RWA / Stablecoin</option>
              <option>Chain</option>
              <option>L1 / Enterprise</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Change Types</option>
              <option>Migration</option>
              <option>Adoption</option>
              <option>Expansion</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Previous Infra</option>
              <option>LayerZero</option>
              <option>Wormhole</option>
              <option>Axelar</option>
              <option>N/A</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-[#375BD2]/30">
              <option value="">All Confidence</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <span className="text-xs text-gray-400 ml-auto">
              Filters are visual in this MVP
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F5F6FA] border-b border-gray-100">
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Project</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Asset</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Previous Infra</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">New Infra</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Date</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540]">Reason</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Confidence</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {migrations.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-50 hover:bg-[#F5F6FA]/70 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-[#0A2540] whitespace-nowrap">{row.project}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{row.category}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs whitespace-nowrap">{row.asset}</td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{row.previousInfra}</td>
                    <td className="px-4 py-3 text-[#375BD2] font-medium whitespace-nowrap">{row.newInfra}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${changeTypeBadge(row.changeType)}`}>
                        {row.changeType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{row.announcementDate}</td>
                    <td className="px-4 py-3 text-gray-500 max-w-[200px]">{row.reason}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${confidenceBadge(row.confidence)}`}>
                        {row.confidence}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <a href={row.evidenceLink} className="text-[#375BD2] hover:underline text-xs font-medium">
                        View &rarr;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 bg-[#F5F6FA] text-xs text-gray-400 flex items-center justify-between">
            <span>Showing {migrations.length} records</span>
            <span>Last updated 2026-06-24 &middot; Mock data</span>
          </div>
        </div>
      </div>
    </main>
  );
}
