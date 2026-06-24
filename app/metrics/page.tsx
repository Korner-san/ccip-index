import { metrics, interopSnapshot } from '@/lib/data';

export const metadata = {
  title: 'Metrics & Comparisons — CCIP Index',
};

export default function MetricsPage() {
  const maxTracked = Math.max(...interopSnapshot.map((p) => p.tracked));

  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Metrics & Comparisons</h1>
          <p className="text-gray-300">
            Aggregate data on cross-chain migrations and CCIP adoption across tracked protocols.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {m.label}
              </p>
              <p className="text-4xl font-bold text-[#375BD2] mb-1">{m.value}</p>
              <p className="text-sm text-gray-500">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Interoperability Snapshot */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="text-xl font-bold text-[#0A2540] mb-1">
            Interoperability Adoption Snapshot
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            Mock comparison of tracked projects across cross-chain protocols.
          </p>
          <div className="space-y-5">
            {interopSnapshot.map((p) => (
              <div key={p.protocol}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#0A2540]">{p.protocol}</span>
                  <span className="text-sm text-gray-400 tabular-nums">
                    {p.tracked} projects
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(p.tracked / maxTracked) * 100}%`,
                      backgroundColor: p.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800">
          <strong>Note:</strong> Metrics are mock data in this MVP and will later be replaced with
          verified sources.
        </div>
      </div>
    </main>
  );
}
