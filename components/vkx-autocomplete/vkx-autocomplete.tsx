"use client";

import React, { ReactNode } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  ScrollShadowProps,
} from "@heroui/react";
import { Key } from "@react-types/shared";

export interface VkxAutocompleteOption {
  textValue: string;
  value: string;
  description?: string;
  startContent?: ReactNode;
}

export interface VkxScrollShadowProps extends ScrollShadowProps {
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
  description?: string;
  disabledKeys?: Set<string>;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
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
  isInvalid,
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
  ...props
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
      isInvalid={isInvalid}
      label={label}
      placeholder={placeholder}
      readOnly={readOnly}
      scrollShadowProps={scrollShadowProps}
      selectedKey={selectedKey}
      selectorIcon={selectorIcon}
      size={size}
      startContent={startContent}
      variant={variant}
      onClose={onClose}
      onInputChange={onInputChange} 
      onSelectionChange={onSelectionChange}
      {...props}
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
