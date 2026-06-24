export type ChangeType = 'Migration' | 'Adoption' | 'Expansion';
export type Confidence = 'High' | 'Medium' | 'Low';

export interface MigrationRecord {
  id: number;
  project: string;
  category: string;
  asset: string;
  previousInfra: string;
  newInfra: string;
  changeType: ChangeType;
  announcementDate: string;
  reason: string;
  confidence: Confidence;
  evidenceLink: string;
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
  confidence: Confidence;
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
    category: 'AI / Agents',
    asset: 'VIRTUAL',
    previousInfra: 'LayerZero',
    newInfra: 'Chainlink CCIP',
    changeType: 'Migration',
    announcementDate: '2026-06-XX',
    reason: 'Security and cross-chain standardization',
    confidence: 'High',
    evidenceLink: '#',
  },
  {
    id: 2,
    project: 'Solv Protocol',
    category: 'BTC / DeFi',
    asset: 'SolvBTC',
    previousInfra: 'LayerZero',
    newInfra: 'Chainlink CCIP',
    changeType: 'Migration',
    announcementDate: '2026-06-XX',
    reason: 'Security review and liquidity unification',
    confidence: 'High',
    evidenceLink: '#',
  },
  {
    id: 3,
    project: 'Re',
    category: 'RWA / Stablecoin',
    asset: 'reUSD',
    previousInfra: 'LayerZero',
    newInfra: 'Chainlink CCIP',
    changeType: 'Migration',
    announcementDate: '2026-XX-XX',
    reason: 'Exclusive CCIP support',
    confidence: 'High',
    evidenceLink: '#',
  },
  {
    id: 4,
    project: 'World Chain',
    category: 'Chain',
    asset: 'N/A',
    previousInfra: 'N/A',
    newInfra: 'Chainlink CCIP',
    changeType: 'Adoption',
    announcementDate: '2026-XX-XX',
    reason: 'Cross-chain interoperability',
    confidence: 'High',
    evidenceLink: '#',
  },
  {
    id: 5,
    project: 'Hedera',
    category: 'L1 / Enterprise',
    asset: 'N/A',
    previousInfra: 'N/A',
    newInfra: 'Chainlink CCIP',
    changeType: 'Adoption',
    announcementDate: '2026-XX-XX',
    reason: 'Enterprise interoperability',
    confidence: 'Medium',
    evidenceLink: '#',
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
    confidence: 'High',
    link: '#',
  },
  {
    id: 2,
    sourceType: 'Official Announcement',
    project: 'Solv Protocol',
    claim: 'SolvBTC infrastructure transitioned to CCIP for improved security',
    confidence: 'High',
    link: '#',
  },
  {
    id: 3,
    sourceType: 'Documentation',
    project: 'Hedera',
    claim: 'Hedera integrating Chainlink CCIP for enterprise cross-chain messaging',
    confidence: 'Medium',
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
