import Link from 'next/link';
import { migrations, emergingSignals } from '@/lib/data';

export default function HomePage() {
  const verifiedMigrations = migrations.length;
  const emergingCount = emergingSignals.length;
  const projectsMonitored = migrations.length + emergingSignals.length;

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5">
            CCIP <span className="text-[#375BD2]">Index</span>
          </h1>
          <p className="text-xl font-semibold text-gray-100 mb-4">
            Verified migrations to Chainlink CCIP.
          </p>
          <p className="text-base text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Track projects replacing LayerZero, Wormhole, Axelar, Stargate, native bridges, and
            other interoperability providers with Chainlink CCIP.
          </p>
          <Link
            href="/migration-tracker"
            className="inline-block bg-[#375BD2] hover:bg-[#0052FF] text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            View Migration Tracker
          </Link>
          <p className="mt-5 text-xs text-gray-500 tracking-wide">
            Evidence-backed.&nbsp;&nbsp;Continuously updated.&nbsp;&nbsp;Research only.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#375BD2] tabular-nums">{verifiedMigrations}</p>
            <p className="text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wider">
              Verified Migrations
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#375BD2] tabular-nums">{emergingCount}</p>
            <p className="text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wider">
              Emerging Signals
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#375BD2] tabular-nums">{projectsMonitored}</p>
            <p className="text-xs text-gray-400 mt-1.5 font-medium uppercase tracking-wider">
              Projects Monitored
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
