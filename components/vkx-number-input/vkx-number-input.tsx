import { NumberInput } from "@heroui/number-input";
import React from "react";
export interface VkxNumberInputProps {
  className?: string;
  defaultValue?: number;
  value?: number;
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isClearable?: boolean;
  isWheelDisabled?: boolean;
  minValue?: number;
  maxValue?: number;
  step?: number;
  formatOptions?: Intl.NumberFormatOptions;
  name?: string;
  hideStepper?: boolean;
  readOnly?: boolean;
  onValueChange?: (value: number) => void | undefined;
  onClear?: (() => void | undefined) | undefined;
}

export const VkxNumberInput: React.FC<VkxNumberInputProps> = ({
  className,
  defaultValue,
  value,
  placeholder,
  label,
  description,
  errorMessage,
  isDisabled,
  isInvalid,
  isRequired,
  isClearable,
  isWheelDisabled,
  minValue,
  maxValue,
  step,
  name,
  formatOptions,
  hideStepper,
  readOnly,
  onValueChange,
  onClear,
  ...props
}) => {
  return (
    <NumberInput
      className={className}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      label={label}
      description={description}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      isClearable={isClearable}
      isWheelDisabled={isWheelDisabled}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      name={name}
      formatOptions={formatOptions}
      readOnly={readOnly}
      hideStepper={hideStepper}
      onValueChange={onValueChange}
      onClear={onClear}
      {...props}
    />
  );
};
