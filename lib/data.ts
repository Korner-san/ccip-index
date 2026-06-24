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

export type Certainty = 'High' | 'Medium' | 'Low';

export interface MigrationRecord {
  id: number;
  project: string;
  from: string;
  to: string;
  status: Status;
  announced: string;
  reason: string;
  evidenceType: EvidenceType;
  source: string;
  certainty: Certainty;
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

// Verified migrations — backed by official announcements or primary sources.
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
    source: 'https://www.prnewswire.com/news-releases/virtuals-protocol-migrates-700m-virtual-token-from-layerzero-to-chainlink-ccip-to-enable-secure-cross-chain-payments-for-ai-agents-302790918.html',
    certainty: 'High',
  },
  {
    id: 2,
    project: 'Kraken',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-14',
    reason: 'Enterprise-grade security and risk management',
    evidenceType: 'Official Announcement',
    source: 'https://www.coindesk.com/business/2026/05/14/kraken-to-replace-layerzero-with-chainlink-to-bridge-assets-across-blockchains',
    certainty: 'High',
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
    source: 'https://blog.re.xyz/chainlink-ccip/',
    certainty: 'High',
  },
  {
    id: 4,
    project: 'Solv Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-07',
    reason: 'Security review and secure-by-default infrastructure',
    evidenceType: 'Official Announcement',
    source: 'https://www.coindesk.com/business/2026/05/07/solv-drops-layerzero-for-chainlink-ccip-in-usd700-million-tokenized-bitcoin-migration',
    certainty: 'High',
  },
];

// Emerging signals — secondary reporting only; require first-party verification.
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
    source: '#',
    certainty: 'Medium',
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
    source: '#',
    certainty: 'Medium',
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
      'Kraken\'s move from LayerZero to Chainlink CCIP is notable because it is an exchange — not a DeFi protocol. This note explores what enterprise-grade security requirements mean for the migration landscape.',
    date: '2026-05-20',
    category: 'Analysis',
  },
];

export const evidenceRecords: EvidenceRecord[] = [
  {
    id: 1,
    date: '2026-06-04',
    project: 'Virtuals Protocol',
    claim: 'Virtuals Protocol announces migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP for AI agent cross-chain payments',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: 'https://www.prnewswire.com/news-releases/virtuals-protocol-migrates-700m-virtual-token-from-layerzero-to-chainlink-ccip-to-enable-secure-cross-chain-payments-for-ai-agents-302790918.html',
  },
  {
    id: 2,
    date: '2026-05-14',
    project: 'Kraken',
    claim: 'Kraken announces replacement of LayerZero with Chainlink CCIP for cross-blockchain asset bridging',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: 'https://www.coindesk.com/business/2026/05/14/kraken-to-replace-layerzero-with-chainlink-to-bridge-assets-across-blockchains',
  },
  {
    id: 3,
    date: '2026-05-08',
    project: 'Re Protocol',
    claim: 'Re Protocol blog confirms migration to Chainlink CCIP following internal security review',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: 'https://blog.re.xyz/chainlink-ccip/',
  },
  {
    id: 4,
    date: '2026-05-07',
    project: 'Solv Protocol',
    claim: 'Solv Protocol drops LayerZero for Chainlink CCIP in $700M tokenized Bitcoin migration',
    sourceType: 'Official Announcement',
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
      'Solv Protocol announces migration of SolvBTC cross-chain infrastructure from LayerZero to Chainlink CCIP following a security review.',
  },
  {
    id: 2,
    date: 'May 8, 2026',
    title: 'Re Protocol',
    description:
      'Re Protocol confirms Chainlink CCIP migration via official blog post, citing internal infrastructure and security evaluation.',
  },
  {
    id: 3,
    date: 'May 14, 2026',
    title: 'Kraken',
    description:
      'Kraken announces it will replace LayerZero with Chainlink CCIP for bridging assets across blockchains — the first major exchange migration.',
  },
  {
    id: 4,
    date: 'Jun 4, 2026',
    title: 'Virtuals Protocol',
    description:
      'Virtuals Protocol announces migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP for secure AI agent cross-chain payments.',
  },
];

export const latestChanges: LatestChange[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    update: 'Migration of $700M VIRTUAL token from LayerZero to Chainlink CCIP announced via press release.',
    date: '2026-06-04',
    from: 'LayerZero',
  },
  {
    id: 2,
    project: 'Kraken',
    update: 'Kraken announces LayerZero replacement with Chainlink CCIP for cross-blockchain bridging.',
    date: '2026-05-14',
    from: 'LayerZero',
  },
  {
    id: 3,
    project: 'Re Protocol',
    update: 'Re Protocol confirms Chainlink CCIP migration following internal security evaluation.',
    date: '2026-05-08',
    from: 'LayerZero',
  },
];
