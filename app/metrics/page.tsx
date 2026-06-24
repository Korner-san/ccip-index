import { migrations } from '@/lib/data';

export const metadata = {
  title: 'Market Map — CCIP Index',
};

export default function MarketMapPage() {
  const trackedMigrations = migrations.filter((m) => m.from !== 'None').length;
  const fromLayerZero = migrations.filter((m) => m.from === 'LayerZero').length;
  const fromOtherProviders = migrations.filter(
    (m) => m.from !== 'None' && m.from !== 'LayerZero',
  ).length;
  const liveOnCCIP = migrations.filter((m) => m.status === 'Live').length;
  const pendingOrAnnounced = migrations.filter(
    (m) => m.status === 'Announced' || m.status === 'In Progress',
  ).length;

  const stats = [
    {
      label: 'Tracked Migrations',
      value: trackedMigrations,
      description: 'Entries where a project moved from an existing provider to CCIP',
    },
    {
      label: 'Moved from LayerZero',
      value: fromLayerZero,
      description: 'Projects specifically migrating away from LayerZero',
    },
    {
      label: 'Moved from Other Providers',
      value: fromOtherProviders,
      description: 'Projects from Wormhole, Axelar, Stargate, native bridges, or other sources',
    },
    {
      label: 'Live on CCIP',
      value: liveOnCCIP,
      description: 'Migrations confirmed live and operational on Chainlink CCIP',
    },
    {
      label: 'Pending or Announced',
      value: pendingOrAnnounced,
      description: 'Announced or in-progress moves not yet confirmed live',
    },
  ];

  // Count migrations per source provider
  const providerCounts: Record<string, number> = {};
  migrations.forEach((m) => {
    providerCounts[m.from] = (providerCounts[m.from] ?? 0) + 1;
  });
  const providerRows = Object.entries(providerCounts).sort((a, b) => b[1] - a[1]);
  const maxCount = Math.max(...Object.values(providerCounts));

  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Market Map</h1>
          <p className="text-gray-300 max-w-2xl">
            A snapshot of interoperability provider migrations tracked in this index.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {s.label}
              </p>
              <p className="text-4xl font-bold text-[#375BD2] mb-1">{s.value}</p>
              <p className="text-sm text-gray-500 leading-snug">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Provider breakdown */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-[#0A2540] mb-1">Previous Provider Breakdown</h2>
          <p className="text-sm text-gray-400 mb-6">
            Where projects came from before adopting CCIP.
          </p>
          <div className="space-y-4">
            {providerRows.map(([provider, count]) => (
              <div key={provider}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#0A2540]">
                    {provider === 'None' ? 'None (New Adoption)' : provider}
                  </span>
                  <span className="text-sm tabular-nums text-gray-400">
                    {count} {count === 1 ? 'entry' : 'entries'}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(count / maxCount) * 100}%`,
                      backgroundColor: provider === 'None' ? '#9CA3AF' : '#375BD2',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800">
          <strong>Note:</strong> This map reflects mock data in the current MVP. Numbers are
          derived directly from the Migration Tracker and will update as new entries are added.
        </div>
      </div>
    </main>
  );
}
