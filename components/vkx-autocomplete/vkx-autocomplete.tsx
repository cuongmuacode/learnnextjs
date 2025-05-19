"use client";

import React, { ReactNode } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@heroui/react";
import { Key } from "@react-types/shared";

export interface VkxAutocompleteOption {
  textValue: string;
  value: string;
  description?: string;
  startContent?: ReactNode;
}

export interface VkxScrollShadowProps {
  isEnabled?: boolean;
}

interface VkxAutocompleteProps extends AutocompleteProps {
  allowsCustomValue?: boolean;
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  description?: string;
  disabledKeys?: Set<any>;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  label?: string;
  onClose?: () => void | undefined;
  onInputChange?: (value: string) => void | undefined;
  onSelectionChange?: ((key: Key | null) => void) | undefined;
  options: VkxAutocompleteOption[];
  placeholder?: string;
  readOnly?: boolean;
  selectedKey?: string;
  selectorIcon?: ReactNode;
  size?: "sm" | "md" | "lg";
  startContent?: ReactNode;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  scrollShadowProps?: VkxScrollShadowProps;
}

export function VkxAutocomplete({
  allowsCustomValue,
  className,
  color,
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
  scrollShadowProps,
}: VkxAutocompleteProps) {
  return (
    <Autocomplete
      allowsCustomValue={allowsCustomValue}
      className={className}
      color={color}
      description={description}
      disabledKeys={disabledKeys}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isRequired={isRequired}
      label={label}
      onClose={onClose}
      onInputChange={onInputChange}
      onSelectionChange={onSelectionChange}
      placeholder={placeholder}
      readOnly={readOnly}
      selectedKey={selectedKey}
      selectorIcon={selectorIcon}
      size={size}
      startContent={startContent}
      variant={variant}
      scrollShadowProps={scrollShadowProps}
    >
      {options.map((option) => (
        <AutocompleteItem
          key={option.value}
          description={option.description}
          startContent={option.startContent}
          textValue={option.textValue}
        >
          {option.textValue}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
