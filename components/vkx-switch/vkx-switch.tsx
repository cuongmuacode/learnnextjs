"use client";
import { ReactNode } from "react";
import { Switch, SwitchProps } from "@heroui/react";

export interface VkxSwitchProps extends SwitchProps {
  children?: ReactNode;
  classNames?: Partial<
    Record<
      | "base"
      | "wrapper"
      | "thumb"
      | "label"
      | "startContent"
      | "endContent"
      | "thumbIcon",
      string
    >
  >;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  defaultSelected?: boolean;
  disableAnimation?: boolean;
  endContent?: ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isSelected?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
  size?: "sm" | "md" | "lg";
  startContent?: ReactNode;
  value?: string;
}

export const VkxSwitch: React.FC<VkxSwitchProps> = ({
  classNames,
  color = "primary",
  defaultSelected,
  disableAnimation = false,
  endContent,
  isDisabled = false,
  isReadOnly,
  isSelected,
  name,
  onChange,
  onValueChange,
  size = "md",
  startContent,
  value,
  ...props
}) => {
  return (
    <Switch
      classNames={classNames}
      color={color}
      defaultSelected={defaultSelected}
      disableAnimation={disableAnimation}
      endContent={endContent}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isSelected={isSelected}
      name={name}
      size={size}
      startContent={startContent}
      value={value}
      onChange={onChange}
      onValueChange={onValueChange}
      {...props}
    />
  );
};
