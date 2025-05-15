import { PressEvent } from "@react-types/shared";
export interface VkxButtonProps {
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
  onPress?: ((e: PressEvent) => void) | undefined;
}
