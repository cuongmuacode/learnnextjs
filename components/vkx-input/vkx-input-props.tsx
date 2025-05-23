import { InputProps } from "@heroui/input";
import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { ReactNode } from "react";
export interface VkxInputProps extends InputProps {
  children?: ReactNode;
  className?: string; // add className prop
  type?:
    | "text"
    | "search"
    | "url"
    | "tel"
    | "email"
    | "password"
    | "file"
    | "number"
    | (string & {});
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  label?: ReactNode;
  defaultValue?: string;
  readOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  min?: string | number | undefined;
  max?: string | number | undefined;
  maxLength?: number;
  description?: React.ReactNode;
  errors?: string[];
  errorMessage?: string;
  errorRequiredMessage?: string;
  errorInvalidMessage?: string;
  isInvalid?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  endContent?: ReactNode;
  validate?:
    | ((value: string) => ValidationError | true | null | undefined)
    | undefined;
}
