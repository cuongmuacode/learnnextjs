import { Textarea } from "@heroui/react";
import React, { ReactNode } from "react";

export interface VkxTextAreaProps {
  className?: string;
  defaultValue?: string;
  description?: string;
  disableAutosize?: boolean; // Thêm prop này để hỗ trợ tắt autosize
  errorMessage?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  label?: ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left";
  maxRows?: number;
  minRows?: number;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
}

export const VkxTextArea: React.FC<VkxTextAreaProps> = ({
  className,
  defaultValue,
  description,
  disableAutosize,
  errorMessage,
  isDisabled,
  isInvalid,
  label,
  labelPlacement,
  maxRows,
  minRows,
  onValueChange,
  placeholder,
  readOnly,
  value,
}) => {
  return (
    <Textarea
      className={className}
      defaultValue={defaultValue}
      description={description}
      disableAutosize={disableAutosize}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      label={label}
      labelPlacement={labelPlacement}
      maxRows={maxRows}
      minRows={minRows}
      onValueChange={onValueChange}
      placeholder={placeholder}
      readOnly={readOnly}
      value={value}
    />
  );
};
