import { DatePicker, DateValue } from "@heroui/react";
import React from "react";

export interface VkxDatePickerProps {
  label?: string;
  placeholder?: DateValue | null;
  value?: DateValue | null;
  defaultValue?: DateValue | null;
  onChange?: (date: DateValue | null) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  description?: string;
  minValue: DateValue;
  maxValue?: DateValue;
  className?: string;
}

export const VkxDatePicker: React.FC<VkxDatePickerProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  isDisabled,
  isInvalid,
  errorMessage,
  description,
  minValue,
  maxValue,
  className,
  ...props
}) => {
  return (
    <DatePicker
      className={className}
      defaultValue={defaultValue}
      description={description}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      label={label}
      maxValue={maxValue}
      minValue={minValue}
      placeholderValue={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
