import { Grid } from '@mantine/core';
import { ResultRow } from './ResultRow';
import { Calculations } from '../../hooks/useCalculations';

interface ProfitabilityMetricsProps {
  calculations: Calculations;
}

export function ProfitabilityMetrics({ calculations }: ProfitabilityMetricsProps) {
  return (
    <Grid>
      <ResultRow label="Ricavo totale" value={calculations.totalRevenue} isEuro />
      <ResultRow label="Profitto netto" value={calculations.netProfit} isEuro />
      <ResultRow label="Margine di profitto" value={calculations.profitMargin} isPercentage />
      <ResultRow label="Costo per lead confermato" value={calculations.costPerConfirmedLead} isEuro />
    </Grid>
  );
}