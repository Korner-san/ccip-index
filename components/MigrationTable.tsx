'use client';

import { Fragment, useState } from 'react';
import type { MigrationRecord } from '@/lib/data';
import XEmbed from '@/components/XEmbed';

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    Live:                   'bg-green-50 text-green-700 border border-green-100',
    Announced:              'bg-sky-50 text-sky-700 border border-sky-100',
    'In Progress':          'bg-amber-50 text-amber-700 border border-amber-100',
    'Old Infra Deprecated': 'bg-slate-100 text-slate-500 border border-slate-200',
    Unverified:             'bg-orange-50 text-orange-600 border border-orange-100',
  };
  return styles[status] ?? 'bg-gray-100 text-gray-500';
}

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
    'Secondary Reporting':   'bg-slate-50 text-slate-500 border border-slate-200',
    'Social Post':           'bg-gray-50 text-gray-500 border border-gray-200',
  };
  return styles[type] ?? 'bg-gray-100 text-gray-500';
}

const certaintyExplanations: Record<string, string> = {
  High:   'Official announcement, official documentation, onchain evidence, or multiple independent confirmations.',
  Medium: 'Reputable secondary reporting or explorer evidence without direct first-party confirmation.',
  Low:    'Early signals, social posts, or incomplete verification. Listed for transparency only.',
};

export default function MigrationTable({
  rows,
  dim = false,
}: {
  rows: MigrationRecord[];
  dim?: boolean;
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  function toggle(id: number) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full" style={{ minWidth: '760px' }}>
        <thead>
          <tr className={`border-b border-gray-200 ${dim ? 'bg-gray-50' : 'bg-white'}`}>
            {['Project', 'From', 'To', 'Status', 'Announced', 'Evidence', 'Certainty'].map(
              (col) => (
                <th
                  key={col}
                  className="text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap"
                >
                  {col}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isExpanded = expandedId === row.id;
            const xPosts = row.supportingXPosts ?? [];

            return (
              <Fragment key={row.id}>
                <tr
                  className={`border-b border-gray-100 transition-colors ${
                    isExpanded ? 'bg-blue-50/20' : 'hover:bg-gray-50/80'
                  }`}
                >
                  <td className="px-4 py-3">
                    <span className="font-semibold text-[#0A2540] text-sm whitespace-nowrap">
                      {row.project}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-500 whitespace-nowrap">{row.from}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-[#375BD2] font-medium whitespace-nowrap">
                      {row.to}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${statusBadge(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-gray-400 tabular-nums whitespace-nowrap">
                      {row.announced}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <button
                      onClick={() => toggle(row.id)}
                      className="text-[11px] font-semibold text-[#375BD2] border border-[#375BD2]/40 rounded px-2.5 py-1 hover:bg-[#375BD2]/5 transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Close ▴' : 'View Evidence ▾'}
                    </button>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${certaintyBadge(
                        row.certainty,
                      )}`}
                    >
                      {row.certainty}
                    </span>
                  </td>
                </tr>

                {/* Expandable evidence drawer */}
                {isExpanded && (
                  <tr className="border-b border-gray-200">
                    <td colSpan={7} className="bg-[#F8F9FC] px-5 py-6">

                      {/* ── Text metadata ── */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-xs mb-6">
                        {/* Left column */}
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                              Migration Claim
                            </p>
                            <p className="text-[#0A2540] leading-relaxed">{row.migrationClaim}</p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                              Primary Evidence
                            </p>
                            <p className="text-gray-600 mb-2">{row.primaryEvidence}</p>
                            {row.source !== '#' ? (
                              <a
                                href={row.source}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#375BD2] hover:underline font-medium"
                              >
                                View external source ↗
                              </a>
                            ) : (
                              <span className="text-gray-300">No source link available</span>
                            )}
                          </div>

                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                              Source Type
                            </p>
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${evidenceTypeBadge(
                                row.evidenceType,
                              )}`}
                            >
                              {row.evidenceType}
                            </span>
                          </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                              Verification Notes
                            </p>
                            <p className="text-gray-500 leading-relaxed">{row.verificationNotes}</p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                              Confidence
                            </p>
                            <div className="flex items-start gap-2.5">
                              <span
                                className={`flex-shrink-0 inline-block px-2 py-0.5 rounded text-[11px] font-semibold mt-0.5 ${certaintyBadge(
                                  row.certainty,
                                )}`}
                              >
                                {row.certainty}
                              </span>
                              <span className="text-gray-400 leading-relaxed">
                                {certaintyExplanations[row.certainty]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Supporting X Signals ── */}
                      {xPosts.length > 0 && (
                        <div className="border-t border-gray-200 pt-5">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Supporting X Signals
                          </p>
                          <p className="text-[11px] text-gray-400 mb-4">
                            X posts are supporting signals. Primary verification comes from the listed evidence source.
                          </p>
                          <XEmbed posts={xPosts} />
                        </div>
                      )}

                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
