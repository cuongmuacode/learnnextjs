import { Input } from "@heroui/input";

import { VkxInputProps } from "./vkx-input-props";
import React from "react";

export const VkxInput: React.FC<VkxInputProps> = ({
  accept,
  children,
  className,
  defaultValue,
  description,
  endContent,
  errorMessage,
  errors,
  errorRequiredMessage,
  errorInvalidMessage,
  isDisabled,
  isInvalid,
  isRequired,
  label,
  labelPlacement,
  min,
  max,
  maxLength,
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
  ...props
}) => {
  // const validateBase = (
  //   value: string
  // ): ValidationError | true | null | undefined => {
  //   let errorMessages: string[] = [];
  //   if (validate) {
  //     var res = validate(value);
  //     errorMessages.push(res);
  //   }
  //   if (isRequired && value && errorRequiredMessage)
  //     errorMessages.push(errorRequiredMessage);
  //   if (isInvalid && errorInvalidMessage) {
  //     errorMessages.push(errorInvalidMessage);
  //   }

  //   return errorMessages;
  // };

  // const [errorMessages, setErrorMessages] = React.useState<string[]>([]);

  // const onValueChangeBase = (value: string) => {
  //   if (onValueChange) onValueChange(value);
  //   if (value && errorRequiredMessage) errorMessages.push(errorRequiredMessage);
  // };
  return (
    <Input
      accept={accept}
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
      max={max}
      maxLength={maxLength}
      min={min}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
      validate={validate}
      value={value}
      onClear={onClear}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </Input>
  );
};
