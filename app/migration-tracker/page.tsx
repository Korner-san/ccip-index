import { migrations, emergingSignals } from '@/lib/data';
import MigrationTable from '@/components/MigrationTable';

export const metadata = {
  title: 'Migration Tracker — CCIP Index',
};

export default function MigrationTrackerPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Compact page header */}
      <div className="border-b border-gray-100 bg-white px-4 py-6">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-xl font-bold text-[#0A2540]">Migration Tracker</h1>
          <p className="text-sm text-gray-400 mt-1">
            A public index of verified interoperability migrations to Chainlink CCIP.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-8">
        {/* Evidence quality legend */}
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

        {/* Verified migrations */}
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

        {/* Emerging signals */}
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
