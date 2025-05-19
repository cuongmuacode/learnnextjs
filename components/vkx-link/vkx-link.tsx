import { Link, LinkProps } from "@heroui/react";
import React, { ReactNode } from "react";

export interface VkxLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  isExternal?: boolean;
  isBlock?: boolean;
  size?: "sm" | "md" | "lg";
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  underline?: "none" | "hover" | "always" | "active" | "focus";
  showAnchorIcon?: boolean;
  anchorIcon?: ReactNode;
  disableAnimation?: boolean;
  rel?: string;
  target?: string;
  download?: boolean | string;
  ping?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  onPress?: (e: any) => void;
  onPressStart?: (e: any) => void;
  onPressEnd?: (e: any) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
}

export const VkxLink: React.FC<VkxLinkProps> = ({
  anchorIcon,
  children,
  className,
  color,
  disableAnimation,
  download,
  href,
  isBlock,
  isDisabled,
  isExternal,
  onKeyDown,
  onKeyUp,
  onPress,
  onPressEnd,
  onPressStart,
  ping,
  referrerPolicy,
  rel,
  showAnchorIcon,
  size,
  target,
  underline,
  ...props
}) => {
  return (
    <Link
      anchorIcon={anchorIcon}
      className={className}
      color={color}
      disableAnimation={disableAnimation}
      download={download}
      href={href}
      isBlock={isBlock}
      isDisabled={isDisabled}
      isExternal={isExternal}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onPress={onPress}
      onPressEnd={onPressEnd}
      onPressStart={onPressStart}
      ping={ping}
      referrerPolicy={referrerPolicy}
      rel={rel}
      showAnchorIcon={showAnchorIcon}
      size={size}
      target={target}
      underline={underline}
      {...props}
    >
      {children}
    </Link>
  );
};
