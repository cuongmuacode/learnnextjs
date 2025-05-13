"use client";

import React, { ReactNode } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

export interface VkxAutocompleteOption {
  textValue: string;
  value: string;
  description?: string;
  startContent?: ReactNode;
}

export interface VkxScrollShadowProps {
  isEnabled?: boolean;
}

interface VkxAutocompleteProps {
  allowsCustomValue?: boolean;
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  defaultValue?: string;
  description?: string;
  disabledKeys?: Set<any>;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  onClose?: (value: boolean) => void;
  onInputChange?: (value: any) => void;
  onSelectionChange?: (value: any) => void;
  options: VkxAutocompleteOption[];
  placeholder?: string;
  readOnly?: boolean;
  selectedKey?: string;
  selectorIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  startContent?: ReactNode;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  vkxScrollShadowProps?: VkxScrollShadowProps;
}

export function VkxAutocomplete({
  allowsCustomValue,
  className,
  color,
  defaultValue,
  description,
  disabledKeys,
  errorMessage,
  isDisabled,
  isRequired,
  label,
  onClose,
  onInputChange,
  onSelectionChange,
  options,
  placeholder,
  readOnly,
  selectedKey,
  selectorIcon,
  size,
  startContent,
  variant,
  vkxScrollShadowProps,
}: VkxAutocompleteProps) {
  return (
    <Autocomplete
      allowsCustomValue={allowsCustomValue}
      className={className}
      color={color}
      defaultInputValue={defaultValue}
      description={description}
      disabledKeys={disabledKeys}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isRequired={isRequired}
      label={label}
      placeholder={placeholder}
      readOnly={readOnly}
      scrollShadowProps={{
        isEnabled: vkxScrollShadowProps?.isEnabled,
      }}
      selectedKey={selectedKey}
      selectorIcon={selectorIcon}
      size={size}
      startContent={startContent}
      variant={variant}
      onClose={() => {
        if (onClose) onClose(true);
      }}
      onInputChange={onInputChange}
      onSelectionChange={onSelectionChange}
    >
      {options.map((option) => (
        <AutocompleteItem
          key={option.value}
          startContent={option.startContent}
          textValue={option.textValue}
        >
          {option.textValue}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
