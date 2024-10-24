import { NumberInput } from '@mantine/core';

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (value: number | string) => void;
  isEuro?: boolean;
  isPercentage?: boolean;
}

export function CalculatorInput({ 
  label, 
  value, 
  onChange, 
  isEuro = false, 
  isPercentage = false 
}: CalculatorInputProps) {
  return (
    <NumberInput
      label={label}
      value={value}
      onChange={onChange}
      min={0}
      max={isPercentage ? 100 : undefined}
      precision={2}
      prefix={isEuro ? "€" : undefined}
      suffix={isPercentage ? "%" : undefined}
    />
  );
}