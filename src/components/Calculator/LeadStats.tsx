import { Grid } from '@mantine/core';
import { ResultRow } from './ResultRow';
import { Calculations } from '../../hooks/useCalculations';

interface LeadStatsProps {
  calculations: Calculations;
}

export function LeadStats({ calculations }: LeadStatsProps) {
  return (
    <Grid>
      <ResultRow label="Lead confermati" value={calculations.confirmedLeads} />
      <ResultRow label="Lead cancellati" value={calculations.canceledLeads} />
      <ResultRow label="Lead fatturabili" value={calculations.adjustedLeads} />
    </Grid>
  );
}