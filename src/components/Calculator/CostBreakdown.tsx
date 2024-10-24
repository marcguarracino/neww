import { Grid } from '@mantine/core';
import { ResultRow } from './ResultRow';
import { Calculations } from '../../hooks/useCalculations';

interface CostBreakdownProps {
  calculations: Calculations;
}

export function CostBreakdown({ calculations }: CostBreakdownProps) {
  return (
    <Grid>
      <ResultRow label="Costo affiliati originale" value={calculations.originalAffiliateCost} isEuro />
      <ResultRow label="Costo affiliati aggiustato" value={calculations.adjustedAffiliateCost} isEuro />
      <ResultRow label="Risparmio da tolleranza" value={calculations.costSavingsFromTolerance} isEuro />
      <ResultRow label="Costi call center" value={calculations.totalCallCenterCosts} isEuro />
      <ResultRow label="Costi resi" value={calculations.totalReturnCosts} isEuro />
      <ResultRow label="Costi spedizione" value={calculations.totalShippingCosts} isEuro />
      <ResultRow label="Costi prodotto" value={calculations.totalProductCosts} isEuro />
      <ResultRow label="Costi totali" value={calculations.totalCosts} isEuro />
    </Grid>
  );
}