import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { ReactNode } from "react";

export interface VkxInputProps {
  children?: ReactNode;
  className?: string; // add className prop
  type?:
  | "text"
  | "search"
  | "url"
  | "tel"
  | "email"
  | "password"
  | (string & {});
  placeholder?: string;
  pattern?: string;
  required?:boolean;
  label?: ReactNode;
  defaultValue?: string;
  readOnly?: boolean;
  isDisabled?: boolean;
  isRequired?:boolean;
  name?:string;
  labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
  description?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  endContent?: ReactNode;
  validate?: ((value: string) => ValidationError | true | null | undefined) | undefined;
}
