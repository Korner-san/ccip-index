'use client';

import { Fragment, useState } from 'react';
import type { MigrationRecord } from '@/lib/data';

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    Live:                 'bg-green-50 text-green-700 border border-green-100',
    Announced:            'bg-sky-50 text-sky-700 border border-sky-100',
    'In Progress':        'bg-amber-50 text-amber-700 border border-amber-100',
    'Old Infra Deprecated': 'bg-slate-100 text-slate-500 border border-slate-200',
    Unverified:           'bg-orange-50 text-orange-600 border border-orange-100',
  };
  return styles[status] ?? 'bg-gray-100 text-gray-500';
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

function sourceTierBadge(tier: string) {
  const styles: Record<string, string> = {
    'Tier 1': 'bg-[#375BD2]/10 text-[#375BD2] border border-[#375BD2]/20',
    'Tier 2': 'bg-amber-50 text-amber-700 border border-amber-100',
    'Tier 3': 'bg-orange-50 text-orange-600 border border-orange-100',
  };
  return styles[tier] ?? 'bg-gray-100 text-gray-500';
}

function certaintyBadge(certainty: string) {
  const styles: Record<string, string> = {
    High:   'bg-green-50 text-green-700 border border-green-100',
    Medium: 'bg-amber-50 text-amber-700 border border-amber-100',
    Low:    'bg-red-50 text-red-600 border border-red-100',
  };
  return styles[certainty] ?? 'bg-gray-100 text-gray-500';
}

const certaintyExplanations: Record<string, string> = {
  High:   'Confirmed by official first-party announcement, documentation, or verified on-chain evidence.',
  Medium: 'Supported by reputable secondary reporting or block explorer data. Not directly confirmed by the project itself.',
  Low:    'Early signal only. Social media post, rumor, or incomplete evidence. Not verified.',
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
      <table className="w-full text-sm" style={{ minWidth: '1100px' }}>
        <thead>
          <tr
            className={`border-b border-gray-100 ${
              dim ? 'bg-gray-50' : 'bg-[#F5F6FA]'
            } text-[#0A2540]`}
          >
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Project</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">From</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">To</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Status</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Announced</th>
            <th className="text-left px-4 py-3 font-semibold" style={{ minWidth: '180px' }}>
              Reason
            </th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Evidence Type</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Source Tier</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Evidence</th>
            <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Certainty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isExpanded = expandedId === row.id;
            return (
              <Fragment key={row.id}>
                <tr
                  className={`border-b border-gray-50 transition-colors ${
                    isExpanded ? 'bg-blue-50/30' : 'hover:bg-[#F5F6FA]/60'
                  }`}
                >
                  {/* Project */}
                  <td className="px-4 py-3 font-semibold text-[#0A2540] whitespace-nowrap">
                    {row.project}
                  </td>

                  {/* From */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`text-xs font-medium ${
                        row.from === 'None' ? 'text-gray-400 italic' : 'text-gray-600'
                      }`}
                    >
                      {row.from}
                    </span>
                  </td>

                  {/* To */}
                  <td className="px-4 py-3 text-[#375BD2] font-medium whitespace-nowrap text-xs">
                    {row.to}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  {/* Announced */}
                  <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap tabular-nums">
                    {row.announced}
                  </td>

                  {/* Reason */}
                  <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed">
                    {row.reason}
                  </td>

                  {/* Evidence Type */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${evidenceTypeBadge(
                        row.evidenceType,
                      )}`}
                    >
                      {row.evidenceType}
                    </span>
                  </td>

                  {/* Source Tier */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${sourceTierBadge(
                        row.sourceTier,
                      )}`}
                    >
                      {row.sourceTier}
                    </span>
                  </td>

                  {/* Evidence — View Evidence + View Details buttons */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      {row.source !== '#' ? (
                        <a
                          href={row.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#375BD2] hover:underline text-xs font-medium"
                        >
                          View Evidence ↗
                        </a>
                      ) : (
                        <span className="text-gray-300 text-xs">No source</span>
                      )}
                      <button
                        onClick={() => toggle(row.id)}
                        className="text-left text-gray-400 hover:text-[#375BD2] text-xs font-medium transition-colors cursor-pointer"
                      >
                        {isExpanded ? 'View Details ▴' : 'View Details ▾'}
                      </button>
                    </div>
                  </td>

                  {/* Certainty */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${certaintyBadge(
                        row.certainty,
                      )}`}
                    >
                      {row.certainty}
                    </span>
                  </td>
                </tr>

                {/* Expandable detail row */}
                {isExpanded && (
                  <tr className="border-b border-gray-100">
                    <td colSpan={10} className="bg-[#F5F6FA] px-6 py-5">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                        {/* Migration Claim */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Migration Claim
                          </p>
                          <p className="text-[#0A2540] leading-relaxed mb-3">{row.migrationClaim}</p>
                          {row.source !== '#' && (
                            <a
                              href={row.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#375BD2] hover:underline font-medium"
                            >
                              View Primary Source ↗
                            </a>
                          )}
                        </div>

                        {/* Source Details */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Source Details
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-400">Type:</span>
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${evidenceTypeBadge(
                                row.evidenceType,
                              )}`}
                            >
                              {row.evidenceType}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-gray-400">Tier:</span>
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${sourceTierBadge(
                                row.sourceTier,
                              )}`}
                            >
                              {row.sourceTier}
                            </span>
                          </div>
                          <p className="text-gray-400 uppercase tracking-wider font-semibold mb-1">
                            Verification Notes
                          </p>
                          <p className="text-gray-500 leading-relaxed">{row.verificationNotes}</p>
                        </div>

                        {/* Certainty */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Certainty
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${certaintyBadge(
                                row.certainty,
                              )}`}
                            >
                              {row.certainty}
                            </span>
                          </div>
                          <p className="text-gray-500 leading-relaxed">
                            {certaintyExplanations[row.certainty]}
                          </p>
                        </div>
                      </div>
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
