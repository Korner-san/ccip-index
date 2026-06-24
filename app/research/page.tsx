import { evidenceRecords, researchPosts, timeline } from '@/lib/data';

export const metadata = {
  title: 'Evidence Feed — CCIP Index',
};

function certaintyBadge(certainty: string) {
  const styles: Record<string, string> = {
    High:   'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-amber-50 text-amber-700 border border-amber-100',
    Low:    'bg-red-50 text-red-600 border border-red-100',
  };
  return styles[certainty] ?? 'bg-gray-100 text-gray-500';
}

function evidenceTypeBadge(type: string) {
  const styles: Record<string, string> = {
    'Official Announcement': 'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Official Docs':         'bg-indigo-50 text-indigo-700 border border-indigo-100',
    'Smart Contract':        'bg-purple-50 text-purple-700 border border-purple-100',
    'Explorer Data':         'bg-teal-50 text-teal-700 border border-teal-100',
    'Chainlink Source':      'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Media Report':          'bg-slate-50 text-slate-600 border border-slate-200',
    'Social Post':           'bg-gray-50 text-gray-500 border border-gray-200',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-500';
}

export default function EvidenceFeedPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Evidence Feed</h1>
          <p className="text-gray-300 max-w-2xl">
            A log of migration claims, ranked by certainty. Each entry links to a primary source.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main: Claim log + context notes */}
          <div className="lg:col-span-2 space-y-8">

            {/* Migration Claim Log */}
            <section>
              <h2 className="text-xl font-bold text-[#0A2540] mb-1">Migration Claim Log</h2>
              <p className="text-sm text-gray-400 mb-4">
                Latest migration claims sorted by date. Certainty reflects the quality of evidence.
              </p>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ minWidth: '640px' }}>
                    <thead>
                      <tr className="bg-[#F5F6FA] border-b border-gray-100 text-[#0A2540]">
                        <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Date</th>
                        <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Project</th>
                        <th className="text-left px-4 py-3 font-semibold">Claim</th>
                        <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Source Type</th>
                        <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Certainty</th>
                        <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {evidenceRecords.map((ev) => (
                        <tr
                          key={ev.id}
                          className="border-b border-gray-50 hover:bg-[#F5F6FA]/60 transition-colors"
                        >
                          <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap tabular-nums">
                            {ev.date}
                          </td>
                          <td className="px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap text-xs">
                            {ev.project}
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed">
                            {ev.claim}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${evidenceTypeBadge(ev.sourceType)}`}>
                              {ev.sourceType}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${certaintyBadge(ev.certainty)}`}>
                              {ev.certainty}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <a href={ev.link} className="text-[#375BD2] hover:underline text-xs font-medium">
                              Source &rarr;
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-2.5 border-t border-gray-100 bg-[#F5F6FA] text-xs text-gray-400">
                  {evidenceRecords.length} records &middot; Mock data
                </div>
              </div>
            </section>

            {/* Context notes */}
            <section>
              <h2 className="text-xl font-bold text-[#0A2540] mb-4">Context Notes</h2>
              <div className="space-y-4">
                {researchPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-[#375BD2]/10 text-[#375BD2] px-2 py-0.5 rounded-full border border-[#375BD2]/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-[#0A2540] mb-2 text-sm">{post.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{post.summary}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Migration Timeline */}
          <div>
            <h2 className="text-xl font-bold text-[#0A2540] mb-4">Migration Timeline</h2>
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-6">
                {timeline.map((milestone) => (
                  <div key={milestone.id} className="relative pl-10">
                    <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-[#375BD2] flex items-center justify-center shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <span className="text-xs font-semibold text-[#375BD2]">{milestone.date}</span>
                      <h3 className="font-semibold text-[#0A2540] text-sm mt-0.5 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
