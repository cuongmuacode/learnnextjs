"use client";
import { ReactNode } from "react";
import {
  Select,
  SelectionMode,
  SelectItem,
  SharedSelection,
} from "@heroui/react";

import { VkxSelectItem } from "./vkx-select-item";
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
  isVirtualized?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left";
  startContent?: ReactNode;
  selectionMode?: SelectionMode;
}

export const VkxSelect: React.FC<VkxSelectProps> = ({
  className,
  color,
  defaultSelectedKeys,
  description,
  disabledKeys,
  errorMessage,
  isDisabled,
  isInvalid,
  isOpen,
  isRequired,
  isVirtualized,
  label,
  labelPlacement,
  onOpenChange,
  onSelectionChange,
  placeholder,
  radius,
  selectItems,
  selectedKeys,
  selectionMode = "single",
  size,
  startContent,
  variant,
  ...props
}) => {
  return (
    <Select
      className={className}
      color={color}
      defaultSelectedKeys={defaultSelectedKeys}
      description={description}
      disabledKeys={disabledKeys}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isOpen={isOpen}
      isRequired={isRequired}
      isVirtualized={isVirtualized}
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      radius={radius}
      selectedKeys={selectedKeys}
      selectionMode={selectionMode}
      size={size}
      startContent={startContent}
      variant={variant}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      {...props}
    >
      {selectItems.map((item) => (
        <SelectItem
          key={item.key}
          description={item.description}
          startContent={item.startContent}
        >
          {item.children}
        </SelectItem>
      ))}
    </Select>
  );
};
