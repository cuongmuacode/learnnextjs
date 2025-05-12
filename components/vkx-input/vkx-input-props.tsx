import { ReactNode } from "react";

export interface VkxInputProps {
    children?: ReactNode,
    type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | (string & {}),
    placeholder?: string,
    label?: ReactNode,
    defaultValue?: string,
    readOnly?: boolean,
    isDisabled?: boolean,
    labelPlacement?: "outside" | "outside-left" | "inside" | undefined,
    description?: string,
    errorMessage?: string,
    isInvalid?: boolean,
    value?: string,
    onValueChange?: (value: string) => void, 
    onClear?: () => void,
    endContent?: ReactNode,
}