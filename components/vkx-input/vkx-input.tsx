import { Input } from "@heroui/input";

import { VkxInputProps } from "./vkx-input-props";

export const VkxInput: React.FC<VkxInputProps> = ({
  children,
  className, // add className prop
  defaultValue,
  description,
  endContent,
  errorMessage,
  isDisabled,
  isInvalid,
  label,
  labelPlacement,
  onClear,
  onValueChange,
  placeholder,
  readOnly,
  type = "text",
  value,
}) => {
  return (
    <Input
      className={className} // add className to Input
      defaultValue={defaultValue}
      description={description}
      endContent={endContent}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
      value={value}
      onClear={onClear}
      onValueChange={onValueChange}
    >
      {children}
    </Input>
  );
};
