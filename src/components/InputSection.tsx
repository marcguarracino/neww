import { Paper, Stack } from '@mantine/core';
import { CalculatorValues } from '../hooks/useCalculations';
import { CalculatorInput } from './Calculator/CalculatorInput';

interface InputSectionProps {
  values: CalculatorValues;
  onChange: (values: CalculatorValues) => void;
}

export function InputSection({ values, onChange }: InputSectionProps) {
  const handleChange = (field: keyof CalculatorValues) => (val: number | string) => {
    const newValue = Number(val) || 0;
    onChange({
      ...values,
      [field]: newValue,
    });
  };

  return (
    <Paper shadow="xs" p="md" mb="lg">
      <Stack spacing="md">
        <CalculatorInput
          label="Numero totale lead"
          value={values.totalLeads}
          onChange={handleChange('totalLeads')}
        />
        <CalculatorInput
          label="Costo per lead (€)"
          value={values.costPerLead}
          onChange={handleChange('costPerLead')}
          isEuro
        />
        <CalculatorInput
          label="Prezzo di vendita (€)"
          value={values.sellingPrice}
          onChange={handleChange('sellingPrice')}
          isEuro
        />
        <CalculatorInput
          label="Costo chiamata call center (€)"
          value={values.callCenterCostPerCall}
          onChange={handleChange('callCenterCostPerCall')}
          isEuro
        />
        <CalculatorInput
          label="Costo per reso (€)"
          value={values.returnCostPerPackage}
          onChange={handleChange('returnCostPerPackage')}
          isEuro
        />
        <CalculatorInput
          label="Costo spedizione per pacco (€)"
          value={values.shippingCostPerPackage}
          onChange={handleChange('shippingCostPerPackage')}
          isEuro
        />
        <CalculatorInput
          label="Costo prodotto per unità (€)"
          value={values.productCostPerUnit}
          onChange={handleChange('productCostPerUnit')}
          isEuro
        />
        <CalculatorInput
          label="Tasso di conferma (%)"
          value={values.confirmationRate}
          onChange={handleChange('confirmationRate')}
          isPercentage
        />
      </Stack>
    </Paper>
  );
}