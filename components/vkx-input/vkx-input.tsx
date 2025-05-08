import { Input } from "@heroui/input";
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

export const VkxInput: React.FC<VkxInputProps> = ({
    children,
    type = "text",
    placeholder,
    label,
    defaultValue,
    readOnly,
    isDisabled,
    labelPlacement,
    description,
    errorMessage,
    isInvalid,
    value,
    onValueChange,
    onClear,
    endContent
}) => {
    return (
        <Input
            children={children}
            type={type}
            placeholder={placeholder}
            label={label}
            defaultValue={defaultValue}
            readOnly={readOnly}
            isDisabled={isDisabled}
            labelPlacement={labelPlacement}
            description={description}
            errorMessage={errorMessage}
            isInvalid={isInvalid}
            value={value}
            onValueChange={onValueChange}
            onClear={onClear}
            endContent={endContent}
        >

        </Input>
    );
}