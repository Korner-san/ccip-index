import { migrations, emergingSignals } from '@/lib/data';
import MigrationTable from '@/components/MigrationTable';

export const metadata = {
  title: 'Migration Tracker — CCIP Index',
};

// ── Derived metrics ────────────────────────────────────────────────────────────

function latestAnnounced(records: typeof migrations): string {
  const dates = records
    .map((m) => m.announced)
    .filter((d) => d !== '—')
    .sort()
    .reverse();
  if (!dates[0]) return '—';
  const d = new Date(dates[0] + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const PROVIDER_GROUPS = ['LayerZero', 'Wormhole', 'Axelar', 'Native Bridge', 'Unknown', 'Other'];

function sourceCounts(records: typeof migrations): Record<string, number> {
  const counts: Record<string, number> = Object.fromEntries(
    PROVIDER_GROUPS.map((p) => [p, 0]),
  );
  for (const r of records) {
    const from = r.from;
    if (PROVIDER_GROUPS.includes(from)) {
      counts[from]++;
    } else if (!from || from === 'None' || from === '—') {
      counts['Unknown']++;
    } else {
      counts['Other']++;
    }
  }
  return counts;
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function MigrationTrackerPage() {
  const allRecords = [...migrations, ...emergingSignals];

  // KPI values
  const verifiedCount = migrations.length;
  const monitoredCount = allRecords.length;
  const latestDate = latestAnnounced(migrations);
  const evidenceSourceCount =
    allRecords.filter((m) => m.source !== '#').length +
    allRecords.reduce((acc, m) => acc + (m.supportingXPosts?.length ?? 0), 0);

  // Migration Sources
  const provCounts = sourceCounts(allRecords);
  const maxProvCount = Math.max(1, ...Object.values(provCounts));

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <div className="border-b border-gray-100 bg-white px-4 py-7">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-2xl font-bold text-[#0A2540] mb-1">Migration Tracker</h1>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
            CCIP Index independently tracks projects adopting Chainlink CCIP and monitors shifts
            in cross-chain infrastructure across the crypto ecosystem.
          </p>
          <p className="text-[11px] text-gray-400 mt-2 tracking-wide">
            {verifiedCount} verified migrations&nbsp;&nbsp;•&nbsp;&nbsp;Updated continuously
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-6">

        {/* ── KPI Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              value: String(verifiedCount),
              label: 'Verified Migrations',
              desc: 'Tracked migrations to CCIP',
            },
            {
              value: String(monitoredCount),
              label: 'Projects Monitored',
              desc: 'Projects currently monitored',
            },
            {
              value: latestDate,
              label: 'Latest Migration',
              desc: 'Most recent tracked migration',
              small: true,
            },
            {
              value: String(evidenceSourceCount),
              label: 'Evidence Sources',
              desc: 'Verification sources collected',
            },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="bg-white border border-gray-200 rounded-lg px-4 py-4"
            >
              <p
                className={`font-bold text-[#375BD2] leading-none mb-1 ${
                  kpi.small ? 'text-xl' : 'text-3xl'
                }`}
              >
                {kpi.value}
              </p>
              <p className="text-[11px] font-semibold text-[#0A2540] mt-1">{kpi.label}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{kpi.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Migration Sources ── */}
        <div className="bg-white border border-gray-200 rounded-lg px-5 py-4">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
            Migration Sources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
            {PROVIDER_GROUPS.map((provider) => {
              const count = provCounts[provider] ?? 0;
              const pct = (count / maxProvCount) * 100;
              return (
                <div key={provider} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-28 flex-shrink-0 truncate">
                    {provider}
                  </span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    {count > 0 && (
                      <div
                        className="h-full rounded-full bg-[#375BD2]"
                        style={{ width: `${pct}%` }}
                      />
                    )}
                  </div>
                  <span
                    className={`text-xs tabular-nums w-4 text-right font-semibold ${
                      count > 0 ? 'text-[#0A2540]' : 'text-gray-300'
                    }`}
                  >
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-gray-400 mt-4">
            Includes {verifiedCount} verified migration{verifiedCount !== 1 ? 's' : ''} and{' '}
            {emergingSignals.length} emerging signal{emergingSignals.length !== 1 ? 's' : ''}.
            Derived from the &ldquo;From&rdquo; field of each record.
          </p>
        </div>

        {/* ── Evidence Quality Legend ── */}
        <div className="rounded border border-gray-100 bg-[#F8F9FC] px-5 py-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Evidence Quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded text-[11px] font-semibold bg-green-50 text-green-700 border border-green-100">
                High
              </span>
              <span>
                Official announcement, official documentation, onchain evidence, or multiple
                independent confirmations.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                Medium
              </span>
              <span>
                Reputable secondary reporting or explorer evidence without direct first-party
                confirmation.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 px-2 py-0.5 rounded text-[11px] font-semibold bg-red-50 text-red-600 border border-red-100">
                Low
              </span>
              <span>
                Early signals, social posts, or incomplete verification. Listed for transparency
                only.
              </span>
            </div>
          </div>
        </div>

        {/* ── Verified migrations ── */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-sm font-semibold text-[#0A2540]">Verified Migrations</h2>
            <span className="text-[11px] px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-100 font-semibold">
              {migrations.length}
            </span>
          </div>
          <div className="rounded border border-gray-200 overflow-hidden">
            <MigrationTable rows={migrations} />
            <div className="px-4 py-2.5 border-t border-gray-100 bg-[#F8F9FC] text-[11px] text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>{migrations.length} entries &middot; sorted by date desc</span>
              <span>Last updated 2026-06-24</span>
            </div>
          </div>
        </section>

        {/* ── Emerging signals ── */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-sm font-semibold text-[#0A2540]">Emerging Signals</h2>
            <span className="text-[11px] px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100 font-semibold">
              {emergingSignals.length}
            </span>
          </div>
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded px-3 py-2 mb-3">
            These entries have not been confirmed by a first-party source and require additional
            verification before being promoted to the verified index.
          </p>
          <div className="rounded border border-gray-200 overflow-hidden opacity-90">
            <MigrationTable rows={emergingSignals} dim />
            <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50 text-[11px] text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>{emergingSignals.length} entries &middot; secondary reporting only</span>
              <span>Pending first-party confirmation</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
