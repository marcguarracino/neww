import { Paper, Divider } from '@mantine/core';
import { Calculations } from '../hooks/useCalculations';
import { LeadStats } from './Calculator/LeadStats';
import { CostBreakdown } from './Calculator/CostBreakdown';
import { ProfitabilityMetrics } from './Calculator/ProfitabilityMetrics';

interface ResultsSectionProps {
  calculations: Calculations;
}

export function ResultsSection({ calculations }: ResultsSectionProps) {
  return (
    <Paper shadow="xs" p="md" bg="gray.0">
      <LeadStats calculations={calculations} />
      <Divider my="sm" label="Costi" />
      <CostBreakdown calculations={calculations} />
      <Divider my="sm" label="Profittabilità" />
      <ProfitabilityMetrics calculations={calculations} />
    </Paper>
  );
}