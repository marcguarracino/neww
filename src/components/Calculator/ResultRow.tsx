import { Grid, Text } from '@mantine/core';

interface ResultRowProps {
  label: string;
  value: number;
  isEuro?: boolean;
  isPercentage?: boolean;
}

export function ResultRow({ label, value, isEuro = false, isPercentage = false }: ResultRowProps) {
  const formattedValue = isEuro 
    ? `€${value.toFixed(2)}`
    : isPercentage 
      ? `${value.toFixed(2)}%`
      : value.toFixed(0);

  return (
    <Grid.Col span={6}>
      <Text fw={500}>{label}:</Text>
      <Text size="xl" c={value >= 0 ? 'green' : 'red'}>
        {formattedValue}
      </Text>
    </Grid.Col>
  );
}