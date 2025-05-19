"use client";
import { ReactNode } from "react";
import { Tooltip, TooltipPlacement, TooltipProps } from "@heroui/react";
import { MotionProps } from "framer-motion";

export interface VkxTooltipProps extends TooltipProps {
  children: ReactNode[];
  classNames?: Partial<Record<"base" | "content", string>>;
  closeDelay?: number;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  containerPadding?: number;
  content: ReactNode;
  crossOffset?: number;
  defaultOpen?: boolean;
  delay?: number;
  disableAnimation?: boolean;
  isDisabled?: boolean;
  isDismissible?: boolean;
  isKeyboardDismissDisabled?: boolean;
  isOpen?: boolean;
  motionProps?: MotionProps;
  offset?: number;
  onClose?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: TooltipPlacement;
  portalContainer?: HTMLElement;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  shouldCloseOnBlur?: boolean;
  shouldCloseOnInteractOutside?: (element: Element) => boolean;
  shouldFlip?: boolean;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  triggerScaleOnOpen?: boolean;
  updatePositionDeps?: any[];
}

export const VkxTooltip: React.FC<VkxTooltipProps> = ({
  children,
  classNames,
  closeDelay = 500,
  color = "default",
  containerPadding = 12,
  content,
  crossOffset = 0,
  defaultOpen,
  delay = 0,
  disableAnimation = false,
  isDisabled = false,
  isDismissible = false,
  isKeyboardDismissDisabled = false,
  isOpen,
  motionProps,
  offset = 7,
  onClose,
  onOpenChange,
  placement = "top",
  portalContainer = document.body,
  radius = "md",
  shadow = "sm",
  shouldCloseOnBlur = true,
  shouldCloseOnInteractOutside,
  shouldFlip = true,
  showArrow = false,
  size = "md",
  triggerScaleOnOpen = true,
  updatePositionDeps = [],
  ...props
}) => {
  return (
    <Tooltip
      children={children}
      classNames={classNames}
      closeDelay={closeDelay}
      color={color}
      containerPadding={containerPadding}
      content={content}
      crossOffset={crossOffset}
      defaultOpen={defaultOpen}
      delay={delay}
      disableAnimation={disableAnimation}
      isDisabled={isDisabled}
      isDismissable={isDismissible}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      isOpen={isOpen}
      motionProps={motionProps}
      offset={offset}
      onClose={onClose}
      onOpenChange={onOpenChange}
      placement={placement}
      portalContainer={portalContainer}
      radius={radius}
      shadow={shadow}
      shouldCloseOnBlur={shouldCloseOnBlur}
      shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
      shouldFlip={shouldFlip}
      showArrow={showArrow}
      size={size}
      triggerScaleOnOpen={triggerScaleOnOpen}
      updatePositionDeps={updatePositionDeps}
      {...props}
    />
  );
};
