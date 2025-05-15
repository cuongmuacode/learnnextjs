import { Input } from "@heroui/input";

import { VkxInputProps } from "./vkx-input-props";

export const VkxInput: React.FC<VkxInputProps> = ({
  children,
  className, 
  defaultValue,
  description,
  endContent,
  errorMessage,
  isDisabled,
  isInvalid,
  isRequired,
  label,
  labelPlacement,
  name,
  onClear,
  onValueChange,
  placeholder,
  pattern,
  required,
  readOnly,
  type = "text",
  value,
  validate,
}) => {
  return (
    <Input
      className={className} 
      defaultValue={defaultValue}
      description={description}
      endContent={endContent}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
      pattern={pattern}
      required={required}
      value={value}
      validate={validate}
      name={name}
      onClear={onClear}
      onValueChange={onValueChange}
    >
      {children}
    </Input>
  );
};
