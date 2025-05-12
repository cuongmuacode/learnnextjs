import { Input } from "@heroui/input";
import { VkxInputProps } from "./vkx-input-props";

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