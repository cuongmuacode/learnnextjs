"use client";

import { Select, SelectItem, SharedSelection } from "@heroui/react";
import { ReactNode } from "react";

export interface VkxSelectItem {    
    children?: ReactNode;
    description?: string;
    startContent?: ReactNode;
}

export interface VkxSelectProps {
    selectItems: VkxSelectItem[];
    defaultSelectedKeys?: Set<string>;
    placeholder?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    selectedKeys?: Set<string>;
    disabledKeys?: Set<string>;
    className?: string;
    onSelectionChange?: (selection: SharedSelection) => void;
    isDisabled?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    labelPlacement?: "inside" | "outside" | "outside-left";
    startContent?: ReactNode;
}

export const VkxSelect: React.FC<VkxSelectProps> = ({
    selectItems,
    defaultSelectedKeys,
    placeholder,
    label,
    description,
    errorMessage,
    selectedKeys,
    disabledKeys,
    className,
    onSelectionChange,
    isDisabled,
    isRequired,
    isInvalid,
    size,
    color,
    variant,
    radius,
    labelPlacement,
    startContent,
}) => {
    return (
        <Select
            defaultSelectedKeys={defaultSelectedKeys}
            placeholder={placeholder}
            label={label}
            description={description}
            errorMessage={errorMessage}
            selectedKeys={selectedKeys}
            disabledKeys={disabledKeys}
            className={className}
            onSelectionChange={onSelectionChange}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isInvalid={isInvalid}
            size={size}
            color={color}
            variant={variant}
            radius={radius}
            labelPlacement={labelPlacement}
            startContent={startContent}
        >
            {selectItems.map((item) => (
                <SelectItem
                    description={item.description}
                    startContent={item.startContent}
                    
                >
                    {item.children}
                </SelectItem>
            ))}
        </Select>
    );
};