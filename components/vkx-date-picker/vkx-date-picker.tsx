import { DatePicker, DatePickerProps, DateValue } from "@heroui/react";
import { ValidationResult } from "@react-types/shared";
import React, { ReactNode } from "react";

export interface VkxDatePickerProps extends DatePickerProps {
  label?: string;
  placeholder?: DateValue | null;
  value?: DateValue | null;
  defaultValue?: DateValue | null;
  onChange?: (date: DateValue | null) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: ReactNode | ((value: ValidationResult) => ReactNode);
  description?: string;
  minValue: DateValue;
  maxValue?: DateValue;
  className?: string;
  showMonthAndYearPickers?: boolean;
  isReadOnly?: boolean;
  visibleMonths?: number;
  granularity?: "day" | "hour" | "minute" | "second";
  isDateUnavailable?: (date: DateValue) => boolean;
}

export const VkxDatePicker: React.FC<VkxDatePickerProps> = ({
  className,
  defaultValue,
  description,
  errorMessage,
  granularity,
  isDateUnavailable,
  isDisabled,
  isInvalid,
  isReadOnly,
  label,
  maxValue,
  minValue,
  onChange,
  placeholder,
  showMonthAndYearPickers,
  value,
  visibleMonths,
  ...props
}) => {
  return (
    <DatePicker
      className={className}
      defaultValue={defaultValue}
      description={description}
      errorMessage={errorMessage}
      granularity={granularity}
      isDateUnavailable={isDateUnavailable}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      label={label}
      maxValue={maxValue}
      minValue={minValue}
      placeholderValue={placeholder}
      showMonthAndYearPickers={showMonthAndYearPickers}
      value={value}
      visibleMonths={visibleMonths}
      onChange={onChange}
      {...props}
    />
  );
};
