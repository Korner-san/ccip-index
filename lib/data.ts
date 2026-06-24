export type Status =
  | 'Announced'
  | 'In Progress'
  | 'Live'
  | 'Old Infra Deprecated'
  | 'Unverified';

export type EvidenceType =
  | 'Official Announcement'
  | 'Official Docs'
  | 'Smart Contract'
  | 'Explorer Data'
  | 'Chainlink Source'
  | 'Media Report'
  | 'Secondary Reporting'
  | 'Social Post';

export type SourceTier = 'Tier 1' | 'Tier 2' | 'Tier 3';

export type Certainty = 'High' | 'Medium' | 'Low';

export interface SupportingSignal {
  label: string;
  url: string;
}

export interface MigrationRecord {
  id: number;
  project: string;
  from: string;
  to: string;
  status: Status;
  announced: string;
  reason: string;
  evidenceType: EvidenceType;
  sourceTier: SourceTier;
  source: string;
  certainty: Certainty;
  migrationClaim: string;
  primaryEvidence: string;
  verificationNotes: string;
  supportingSignals?: SupportingSignal[];
}

export interface ResearchPost {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export interface EvidenceRecord {
  id: number;
  date: string;
  project: string;
  claim: string;
  sourceType: EvidenceType;
  certainty: Certainty;
  link: string;
}

export interface TimelineMilestone {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface LatestChange {
  id: number;
  project: string;
  update: string;
  date: string;
  from: string;
}

export const migrations: MigrationRecord[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-06-04',
    reason: 'Security hardening for AI agent infrastructure',
    evidenceType: 'Official Announcement',
    sourceTier: 'Tier 1',
    source: 'https://www.prnewswire.com/news-releases/virtuals-protocol-migrates-700m-virtual-token-from-layerzero-to-chainlink-ccip-to-enable-secure-cross-chain-payments-for-ai-agents-302790918.html',
    certainty: 'High',
    migrationClaim:
      'Virtuals Protocol announced the migration of its $700M VIRTUAL token bridge from LayerZero to Chainlink CCIP to enable secure cross-chain payments for AI agents.',
    primaryEvidence: 'PR Newswire press release (June 4, 2026)',
    verificationNotes:
      'Confirmed via official PR Newswire press release. Multiple major crypto news outlets independently reported the announcement within 24 hours of publication.',
    supportingSignals: [
      { label: 'Virtuals Protocol', url: 'https://x.com/virtuals_io' },
      { label: 'Chainlink', url: 'https://x.com/chainlink' },
    ],
  },
  {
    id: 2,
    project: 'Kraken',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-14',
    reason: 'Enterprise-grade security and risk management',
    evidenceType: 'Media Report',
    sourceTier: 'Tier 2',
    source: 'https://www.coindesk.com/business/2026/05/14/kraken-to-replace-layerzero-with-chainlink-to-bridge-assets-across-blockchains',
    certainty: 'High',
    migrationClaim:
      'Kraken announced it will replace LayerZero with Chainlink CCIP for bridging assets, including kBTC, across blockchains.',
    primaryEvidence: 'CoinDesk article (May 14, 2026)',
    verificationNotes:
      'Reported by CoinDesk based on direct communication from Kraken. No conflicting reports found at time of indexing. First-party blog post not published at time of entry.',
    supportingSignals: [
      { label: 'Kraken', url: 'https://x.com/krakenfx' },
      { label: 'Chainlink', url: 'https://x.com/chainlink' },
    ],
  },
  {
    id: 3,
    project: 'Re Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-08',
    reason: 'Internal infrastructure review and security evaluation',
    evidenceType: 'Official Announcement',
    sourceTier: 'Tier 1',
    source: 'https://blog.re.xyz/chainlink-ccip/',
    certainty: 'High',
    migrationClaim:
      'Re Protocol confirmed migration to Chainlink CCIP for reUSD cross-chain transfers following an internal infrastructure and security review.',
    primaryEvidence: 'Official Re Protocol blog post (May 8, 2026)',
    verificationNotes:
      "Confirmed via Re Protocol's official blog at blog.re.xyz. First-party source with direct technical and strategic rationale provided.",
    supportingSignals: [
      { label: 'Re Protocol', url: 'https://x.com/re_xyz_' },
      { label: 'Chainlink', url: 'https://x.com/chainlink' },
    ],
  },
  {
    id: 4,
    project: 'Solv Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-07',
    reason: 'Security review and secure-by-default infrastructure',
    evidenceType: 'Media Report',
    sourceTier: 'Tier 2',
    source: 'https://www.coindesk.com/business/2026/05/07/solv-drops-layerzero-for-chainlink-ccip-in-usd700-million-tokenized-bitcoin-migration',
    certainty: 'High',
    migrationClaim:
      'Solv Protocol announced the migration of SolvBTC cross-chain infrastructure from LayerZero to Chainlink CCIP in a $700M tokenized Bitcoin migration.',
    primaryEvidence: 'CoinDesk article (May 7, 2026)',
    verificationNotes:
      "Reported by CoinDesk. Corroborated by Solv Protocol's public communications and developer channels. Security review cited as the primary driver.",
    supportingSignals: [
      { label: 'Solv Protocol', url: 'https://x.com/SolvProtocol' },
      { label: 'Chainlink', url: 'https://x.com/chainlink' },
    ],
  },
];

export const emergingSignals: MigrationRecord[] = [
  {
    id: 101,
    project: 'Kelp DAO',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Unverified',
    announced: '—',
    reason: 'Reported migration signal; no first-party confirmation yet',
    evidenceType: 'Secondary Reporting',
    sourceTier: 'Tier 3',
    source: '#',
    certainty: 'Medium',
    migrationClaim:
      'Kelp DAO reported to be migrating rsETH cross-chain infrastructure from LayerZero to Chainlink CCIP.',
    primaryEvidence: 'Secondary reporting (unconfirmed)',
    verificationNotes:
      'No official announcement from Kelp DAO found at time of entry. Based on secondary reporting only. Requires direct first-party confirmation before promotion to the verified index.',
    supportingSignals: [],
  },
  {
    id: 102,
    project: 'Lombard',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Unverified',
    announced: '—',
    reason: 'Reported migration signal; no first-party confirmation yet',
    evidenceType: 'Secondary Reporting',
    sourceTier: 'Tier 3',
    source: '#',
    certainty: 'Medium',
    migrationClaim:
      'Lombard reported to be migrating LBTC cross-chain infrastructure from LayerZero to Chainlink CCIP.',
    primaryEvidence: 'Secondary reporting (unconfirmed)',
    verificationNotes:
      'No official announcement from Lombard found at time of entry. Based on secondary reporting only. Requires direct first-party confirmation before promotion to the verified index.',
    supportingSignals: [],
  },
];

export const researchPosts: ResearchPost[] = [
  {
    id: 1,
    title: 'LayerZero to CCIP: What the Early Migration Pattern Tells Us',
    summary:
      'All four verified migrations in this index share the same origin: LayerZero. This note examines whether security posture, ecosystem incentives, or institutional requirements are the primary driver.',
    date: '2026-06-10',
    category: 'Migration Pattern',
  },
  {
    id: 2,
    title: 'How to Verify a Migration: Evidence Quality and What to Look For',
    summary:
      'Not all migration claims are equal. This guide covers what separates a High-certainty record from a Secondary Reporting signal, and how on-chain data can confirm or refute a claim.',
    date: '2026-06-05',
    category: 'Methodology',
  },
  {
    id: 3,
    title: 'Kraken and the Enterprise Signal: What Institutional Migrations Mean',
    summary:
      "Kraken's move from LayerZero to Chainlink CCIP is notable because it is an exchange — not a DeFi protocol. This note explores what enterprise-grade security requirements mean for the migration landscape.",
    date: '2026-05-20',
    category: 'Analysis',
  },
];

export const evidenceRecords: EvidenceRecord[] = [
  {
    id: 1,
    date: '2026-06-04',
    project: 'Virtuals Protocol',
    claim:
      'Virtuals Protocol announces migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP for AI agent cross-chain payments',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: 'https://www.prnewswire.com/news-releases/virtuals-protocol-migrates-700m-virtual-token-from-layerzero-to-chainlink-ccip-to-enable-secure-cross-chain-payments-for-ai-agents-302790918.html',
  },
  {
    id: 2,
    date: '2026-05-14',
    project: 'Kraken',
    claim:
      'Kraken announces replacement of LayerZero with Chainlink CCIP for cross-blockchain asset bridging',
    sourceType: 'Media Report',
    certainty: 'High',
    link: 'https://www.coindesk.com/business/2026/05/14/kraken-to-replace-layerzero-with-chainlink-to-bridge-assets-across-blockchains',
  },
  {
    id: 3,
    date: '2026-05-08',
    project: 'Re Protocol',
    claim:
      'Re Protocol blog confirms migration to Chainlink CCIP following internal security review',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: 'https://blog.re.xyz/chainlink-ccip/',
  },
  {
    id: 4,
    date: '2026-05-07',
    project: 'Solv Protocol',
    claim:
      'Solv Protocol drops LayerZero for Chainlink CCIP in $700M tokenized Bitcoin migration',
    sourceType: 'Media Report',
    certainty: 'High',
    link: 'https://www.coindesk.com/business/2026/05/07/solv-drops-layerzero-for-chainlink-ccip-in-usd700-million-tokenized-bitcoin-migration',
  },
];

export const timeline: TimelineMilestone[] = [
  {
    id: 1,
    date: 'May 7, 2026',
    title: 'Solv Protocol',
    description:
      'Solv Protocol announces migration of SolvBTC from LayerZero to Chainlink CCIP following a security review.',
  },
  {
    id: 2,
    date: 'May 8, 2026',
    title: 'Re Protocol',
    description:
      'Re Protocol confirms Chainlink CCIP migration via official blog, citing internal infrastructure and security evaluation.',
  },
  {
    id: 3,
    date: 'May 14, 2026',
    title: 'Kraken',
    description:
      'Kraken announces LayerZero replacement with Chainlink CCIP — the first major exchange migration recorded in the index.',
  },
  {
    id: 4,
    date: 'Jun 4, 2026',
    title: 'Virtuals Protocol',
    description:
      'Virtuals Protocol announces migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP for AI agent cross-chain payments.',
  },
];

export const latestChanges: LatestChange[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    update:
      'Migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP announced via PR Newswire.',
    date: '2026-06-04',
    from: 'LayerZero',
  },
  {
    id: 2,
    project: 'Kraken',
    update:
      'Kraken announces LayerZero replacement with Chainlink CCIP for cross-blockchain bridging.',
    date: '2026-05-14',
    from: 'LayerZero',
  },
  {
    id: 3,
    project: 'Re Protocol',
    update:
      'Re Protocol confirms Chainlink CCIP migration following internal security evaluation.',
    date: '2026-05-08',
    from: 'LayerZero',
  },
];
