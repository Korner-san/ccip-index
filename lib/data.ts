export type ChangeType = 'Migration' | 'Adoption' | 'Expansion' | 'Evaluation';
export type Status = 'Announced' | 'In Progress' | 'Live' | 'Deprecated Old Infra' | 'Unverified';
export type EvidenceType =
  | 'Official Announcement'
  | 'Official Documentation'
  | 'Smart Contract'
  | 'Explorer Data'
  | 'Chainlink Source'
  | 'Media Report'
  | 'Social Post'
  | 'Multiple Sources';
export type EvidenceLevel = 'High' | 'Medium' | 'Low';

export interface MigrationRecord {
  id: number;
  project: string;
  sector: string;
  asset: string;
  from: string;
  to: string;
  changeType: ChangeType;
  status: Status;
  announced: string;
  statedReason: string;
  evidenceType: EvidenceType;
  evidenceLevel: EvidenceLevel;
  source: string;
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
  sourceType: string;
  project: string;
  claim: string;
  evidenceLevel: EvidenceLevel;
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
  type: string;
}

export const migrations: MigrationRecord[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    sector: 'Agent Economy',
    asset: 'VIRTUAL',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    changeType: 'Migration',
    status: 'Live',
    announced: '2026-06-10',
    statedReason: 'Cross-chain standardization and security',
    evidenceType: 'Official Announcement',
    evidenceLevel: 'High',
    source: '#',
  },
  {
    id: 2,
    project: 'Solv Protocol',
    sector: 'BTCFi',
    asset: 'SolvBTC',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    changeType: 'Migration',
    status: 'Live',
    announced: '2026-06-05',
    statedReason: 'Security review and unified liquidity',
    evidenceType: 'Multiple Sources',
    evidenceLevel: 'High',
    source: '#',
  },
  {
    id: 3,
    project: 'Re Protocol',
    sector: 'RWA',
    asset: 'reUSD',
    from: 'LayerZero',
    to: 'Chainlink CCIP',
    changeType: 'Migration',
    status: 'Announced',
    announced: '2026-05-20',
    statedReason: 'Exclusive CCIP integration for RWA compliance',
    evidenceType: 'Official Announcement',
    evidenceLevel: 'High',
    source: '#',
  },
  {
    id: 4,
    project: 'World Chain',
    sector: 'Infrastructure',
    asset: 'N/A',
    from: 'None',
    to: 'Chainlink CCIP',
    changeType: 'Adoption',
    status: 'Live',
    announced: '2026-04-18',
    statedReason: 'Native cross-chain interoperability at launch',
    evidenceType: 'Chainlink Source',
    evidenceLevel: 'High',
    source: '#',
  },
  {
    id: 5,
    project: 'Hedera',
    sector: 'L1',
    asset: 'N/A',
    from: 'None',
    to: 'Chainlink CCIP',
    changeType: 'Adoption',
    status: 'In Progress',
    announced: '2026-03-12',
    statedReason: 'Institutional-grade interoperability',
    evidenceType: 'Official Documentation',
    evidenceLevel: 'Medium',
    source: '#',
  },
];

export const metrics: MetricCard[] = [
  {
    label: 'Total Tracked Projects',
    value: '5',
    description: 'Projects with verified CCIP activity',
  },
  {
    label: 'Verified Migrations',
    value: '3',
    description: 'Projects that moved from another protocol to CCIP',
  },
  {
    label: 'CCIP Adoptions',
    value: '2',
    description: 'Projects that adopted CCIP as new infrastructure',
  },
  {
    label: 'Protocols Monitored',
    value: '4',
    description: 'Cross-chain protocols under active tracking',
  },
  {
    label: 'High-Confidence Records',
    value: '4',
    description: 'Records backed by official announcements',
  },
];

export const interopSnapshot: InteropEntry[] = [
  { protocol: 'Chainlink CCIP', tracked: 5, color: '#375BD2' },
  { protocol: 'LayerZero', tracked: 12, color: '#6B7280' },
  { protocol: 'Wormhole', tracked: 8, color: '#6B7280' },
  { protocol: 'Axelar', tracked: 6, color: '#6B7280' },
  { protocol: 'Hyperlane', tracked: 4, color: '#6B7280' },
];

export const researchPosts: ResearchPost[] = [
  {
    id: 1,
    title: 'LayerZero to CCIP: Early Migration Signals',
    summary:
      'An analysis of the first wave of projects moving from LayerZero to Chainlink CCIP, examining the security and standardization arguments driving the trend.',
    date: '2026-06-15',
    category: 'Migration Analysis',
  },
  {
    id: 2,
    title: 'Why Cross-Chain Security Became the Main Adoption Driver',
    summary:
      'Security incidents and audit findings are accelerating protocol migrations. This report examines how security concerns have overtaken cost as the primary adoption factor.',
    date: '2026-06-10',
    category: 'Trend Report',
  },
  {
    id: 3,
    title: 'RWA and Stablecoin Projects Choosing CCIP',
    summary:
      'Real-world asset protocols and stablecoin issuers are disproportionately choosing CCIP. We examine the compliance and reliability factors at play.',
    date: '2026-06-05',
    category: 'Sector Analysis',
  },
];

export const evidenceRecords: EvidenceRecord[] = [
  {
    id: 1,
    sourceType: 'Official Announcement',
    project: 'Virtuals Protocol',
    claim: 'VIRTUAL token bridge migrated from LayerZero to Chainlink CCIP',
    evidenceLevel: 'High',
    link: '#',
  },
  {
    id: 2,
    sourceType: 'Multiple Sources',
    project: 'Solv Protocol',
    claim: 'SolvBTC infrastructure transitioned to CCIP for improved security',
    evidenceLevel: 'High',
    link: '#',
  },
  {
    id: 3,
    sourceType: 'Official Documentation',
    project: 'Hedera',
    claim: 'Hedera integrating Chainlink CCIP for enterprise cross-chain messaging',
    evidenceLevel: 'Medium',
    link: '#',
  },
];

export const timeline: TimelineMilestone[] = [
  {
    id: 1,
    date: 'Q1 2026',
    title: 'First Migration Wave',
    description:
      'Initial cohort of DeFi protocols begin migrating from LayerZero to Chainlink CCIP citing security and standardization.',
  },
  {
    id: 2,
    date: 'Q2 2026',
    title: 'RWA Sector Joins',
    description:
      'Real-world asset and stablecoin protocols adopt CCIP as preferred interoperability layer.',
  },
  {
    id: 3,
    date: 'Q2 2026',
    title: 'Enterprise Integrations',
    description:
      'Enterprise-grade networks including Hedera and World Chain announce CCIP support.',
  },
  {
    id: 4,
    date: 'Q3 2026',
    title: 'Index Launch',
    description:
      'CCIP Index launched to publicly track and verify cross-chain migrations.',
  },
];

export const latestChanges: LatestChange[] = [
  {
    id: 1,
    project: 'Virtuals Protocol',
    update: 'Migration from LayerZero to Chainlink CCIP confirmed via official announcement.',
    date: '2026-06-15',
    type: 'Migration',
  },
  {
    id: 2,
    project: 'World Chain',
    update: 'CCIP adoption confirmed for cross-chain interoperability.',
    date: '2026-06-12',
    type: 'Adoption',
  },
  {
    id: 3,
    project: 'Solv Protocol',
    update: 'SolvBTC bridge infrastructure migrated to CCIP.',
    date: '2026-06-10',
    type: 'Migration',
  },
];
