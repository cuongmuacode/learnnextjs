"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { ReactNode } from "react";

export interface VkxAutocompleteOption {
    label: string;
    value: string;
    description?: string;
    startContent?: ReactNode;
}

export interface VkxScrollShadowProps {
    isEnabled?: boolean;
}

interface VkxAutocompleteProps {
    options: VkxAutocompleteOption[];
    defaultValue?: string;
    description?: string;
    placeholder?: string;
    label?: string;
    selectedKey?: string;
    disabledKeys?: Set<any>;
    onSelectionChange?: (value: any) => void;
    onClose?: (value: boolean) => void;
    onInputChange?: (value: any) => void;
    className?: string;
    errorMessage?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    readOnly?: boolean;
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "underlined" | "faded";
    startContent?: ReactNode;
    allowsCustomValue?: boolean;
    selectorIcon?: ReactNode;
    vkxScrollShadowProps?: VkxScrollShadowProps;
}

export function VkxAutocomplete({
    options,
    placeholder,
    defaultValue,
    description,
    label,
    selectedKey,
    disabledKeys,
    onSelectionChange,
    onClose,
    onInputChange,
    className,
    errorMessage,
    isRequired,
    isDisabled,
    readOnly,
    size,
    color,
    variant,
    startContent,
    allowsCustomValue,
    selectorIcon,
    vkxScrollShadowProps
}: VkxAutocompleteProps) {
    return (
        <Autocomplete
            defaultInputValue={defaultValue}
            placeholder={placeholder}
            description={description}
            label={label}
            selectedKey={selectedKey}
            className={className}
            onSelectionChange={onSelectionChange}
            onClose={() => { if (onClose) onClose(true); }}
            onInputChange={onInputChange}
            errorMessage={errorMessage}
            isRequired={isRequired}
            isDisabled={isDisabled}
            disabledKeys={disabledKeys}
            readOnly={readOnly}
            size={size}
            color={color}
            variant={variant}
            startContent={startContent}
            allowsCustomValue={allowsCustomValue}
            selectorIcon={selectorIcon}
            scrollShadowProps={{
                isEnabled: vkxScrollShadowProps?.isEnabled
            }}
        >
            {options.map((option) => (
                <AutocompleteItem
                    key={option.value}
                    textValue={option.label}
                    startContent={option.startContent}
                >
                    {option.label}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    );
}