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

export interface MetricCard {
  label: string;
  value: string;
  description: string;
}

export interface InteropEntry {
  protocol: string;
  tracked: number;
  color: string;
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
    status: 'Live',
    announced: '2026-06-10',
    reason: 'Cross-chain standardization and improved security model',
    evidenceType: 'Official Announcement',
    source: '#',
    certainty: 'High',
  },
  {
    id: 2,
    project: 'Solv Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Live',
    announced: '2026-06-05',
    reason: 'Security review triggered migration; unified SolvBTC liquidity across chains',
    evidenceType: 'Official Announcement',
    source: '#',
    certainty: 'High',
  },
  {
    id: 3,
    project: 'Re Protocol',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    status: 'Announced',
    announced: '2026-05-20',
    reason: 'Exclusive CCIP integration for reUSD cross-chain transfers',
    evidenceType: 'Official Announcement',
    source: '#',
    certainty: 'High',
  },
  {
    id: 4,
    project: 'World Chain',
    from: 'None',
    to: 'Chainlink CCIP',
    status: 'Live',
    announced: '2026-04-18',
    reason: 'CCIP selected as native interoperability layer at chain launch',
    evidenceType: 'Chainlink Source',
    source: '#',
    certainty: 'High',
  },
  {
    id: 5,
    project: 'Hedera',
    from: 'None',
    to: 'Chainlink CCIP',
    status: 'In Progress',
    announced: '2026-03-12',
    reason: 'Institutional-grade cross-chain messaging requirement',
    evidenceType: 'Official Docs',
    source: '#',
    certainty: 'Medium',
  },
];

export const interopSnapshot: InteropEntry[] = [
  { protocol: 'LayerZero', tracked: 3, color: '#6B7280' },
  { protocol: 'None (New Adoption)', tracked: 2, color: '#9CA3AF' },
  { protocol: 'Wormhole', tracked: 0, color: '#D1D5DB' },
  { protocol: 'Axelar', tracked: 0, color: '#D1D5DB' },
  { protocol: 'Stargate', tracked: 0, color: '#D1D5DB' },
];

export const researchPosts: ResearchPost[] = [
  {
    id: 1,
    title: 'LayerZero to CCIP: What the Early Migration Pattern Tells Us',
    summary:
      'Three of the first five tracked migrations share the same origin: LayerZero. This note examines whether security posture or ecosystem incentives are the primary driver.',
    date: '2026-06-15',
    category: 'Migration Pattern',
  },
  {
    id: 2,
    title: 'How to Verify a Migration: Evidence Quality and What to Look For',
    summary:
      'Not all migration claims are equal. This guide covers what separates a High-certainty record from a Low-certainty signal, and how on-chain data can confirm or refute a claim.',
    date: '2026-06-10',
    category: 'Methodology',
  },
  {
    id: 3,
    title: 'New Adoptions vs. Migrations: Why the Distinction Matters',
    summary:
      'Projects choosing CCIP from day one differ from those actively migrating away from a competitor. Understanding the difference changes how we interpret adoption data.',
    date: '2026-06-05',
    category: 'Analysis',
  },
];

export const evidenceRecords: EvidenceRecord[] = [
  {
    id: 1,
    date: '2026-06-10',
    project: 'Virtuals Protocol',
    claim: 'Official announcement confirms VIRTUAL bridge moved from LayerZero to Chainlink CCIP',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: '#',
  },
  {
    id: 2,
    date: '2026-06-05',
    project: 'Solv Protocol',
    claim: 'Solv Protocol announces SolvBTC cross-chain infrastructure migrated to CCIP after security review',
    sourceType: 'Official Announcement',
    certainty: 'High',
    link: '#',
  },
  {
    id: 3,
    date: '2026-05-20',
    project: 'Re Protocol',
    claim: 'Re Protocol docs confirm reUSD will use Chainlink CCIP exclusively for cross-chain transfers',
    sourceType: 'Official Docs',
    certainty: 'High',
    link: '#',
  },
  {
    id: 4,
    date: '2026-04-18',
    project: 'World Chain',
    claim: 'Chainlink blog confirms World Chain integrates CCIP as native interoperability layer',
    sourceType: 'Chainlink Source',
    certainty: 'High',
    link: '#',
  },
  {
    id: 5,
    date: '2026-03-12',
    project: 'Hedera',
    claim: 'Hedera developer docs reference CCIP integration for enterprise cross-chain use cases',
    sourceType: 'Official Docs',
    certainty: 'Medium',
    link: '#',
  },
];

export const timeline: TimelineMilestone[] = [
  {
    id: 1,
    date: 'Q1 2026',
    title: 'First Migration Signals',
    description:
      'Early LayerZero-to-CCIP migration signals emerge. Hedera announces CCIP integration intent.',
  },
  {
    id: 2,
    date: 'Q2 2026',
    title: 'Confirmed Migrations',
    description:
      'Virtuals Protocol, Solv Protocol, and Re Protocol all announce confirmed or in-progress migrations from LayerZero to CCIP.',
  },
  {
    id: 3,
    date: 'Q2 2026',
    title: 'New Chain Adoptions',
    description:
      'World Chain launches with CCIP as its native interoperability layer — a new adoption rather than a migration.',
  },
  {
    id: 4,
    date: 'Q3 2026',
    title: 'Index Goes Live',
    description:
      'CCIP Index launches to publicly track and verify interoperability provider shifts.',
  },
];

export const latestChanges: LatestChange[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    update: 'Confirmed migration from LayerZero to Chainlink CCIP via official announcement.',
    date: '2026-06-10',
    from: 'LayerZero',
  },
  {
    id: 2,
    project: 'Solv Protocol',
    update: 'SolvBTC bridge migrated to CCIP following internal security review.',
    date: '2026-06-05',
    from: 'LayerZero',
  },
  {
    id: 3,
    project: 'Re Protocol',
    update: 'reUSD confirmed to use CCIP exclusively per official documentation.',
    date: '2026-05-20',
    from: 'LayerZero',
  },
];
