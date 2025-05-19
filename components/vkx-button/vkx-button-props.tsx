import { ButtonProps } from "@heroui/button";
import { PressEvent } from "@react-types/shared";
export interface VkxButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string; // add className prop
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  isDisabled?: boolean;
  isLoading?: boolean;
  startContent?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isIconOnly?: boolean;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  onPress?: ((e: PressEvent) => void) | undefined;
}
