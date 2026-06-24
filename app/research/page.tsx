import { researchPosts, evidenceRecords, timeline } from '@/lib/data';

export const metadata = {
  title: 'Research & Insights — CCIP Index',
};

function confidenceBadge(confidence: string) {
  const styles: Record<string, string> = {
    High: 'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
    Low: 'bg-gray-100 text-gray-600 border border-gray-200',
  };
  return styles[confidence] ?? 'bg-gray-100 text-gray-600';
}

export default function ResearchPage() {
  return (
    <main className="bg-[#F5F6FA] min-h-screen">
      {/* Page header */}
      <div className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Research & Insights</h1>
          <p className="text-gray-300">
            Evidence-backed analysis of CCIP adoption trends and cross-chain migration signals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latest Reports */}
            <section>
              <h2 className="text-xl font-bold text-[#0A2540] mb-4">Latest Reports</h2>
              <div className="space-y-4">
                {researchPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg p-5 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-[#375BD2]/10 text-[#375BD2] px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-[#0A2540] mb-2 text-base">{post.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{post.summary}</p>
                    <a
                      href="#"
                      className="text-[#375BD2] text-sm font-medium mt-3 inline-block hover:underline"
                    >
                      Read more &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Evidence Vault */}
            <section>
              <h2 className="text-xl font-bold text-[#0A2540] mb-4">Evidence Vault</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#F5F6FA] border-b border-gray-100">
                        <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                          Source Type
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                          Project
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0A2540]">Claim</th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                          Confidence
                        </th>
                        <th className="text-left px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {evidenceRecords.map((ev) => (
                        <tr
                          key={ev.id}
                          className="border-b border-gray-50 hover:bg-[#F5F6FA]/70 transition-colors"
                        >
                          <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                            {ev.sourceType}
                          </td>
                          <td className="px-4 py-3 font-medium text-[#0A2540] whitespace-nowrap">
                            {ev.project}
                          </td>
                          <td className="px-4 py-3 text-gray-500">{ev.claim}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${confidenceBadge(ev.confidence)}`}
                            >
                              {ev.confidence}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <a
                              href={ev.link}
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
              </div>
            </section>
          </div>

          {/* Sidebar — Timeline */}
          <div>
            <h2 className="text-xl font-bold text-[#0A2540] mb-4">Adoption Timeline</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3.5 top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-6">
                {timeline.map((milestone) => (
                  <div key={milestone.id} className="relative pl-10">
                    {/* Dot */}
                    <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-[#375BD2] flex items-center justify-center shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <span className="text-xs font-semibold text-[#375BD2]">
                        {milestone.date}
                      </span>
                      <h3 className="font-semibold text-[#0A2540] text-sm mt-0.5 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {milestone.description}
                      </p>
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
