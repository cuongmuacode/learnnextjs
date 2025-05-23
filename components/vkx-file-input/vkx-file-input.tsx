import React from "react";
import VkxButton from "../vkx-button/vkx-button";
import { VkxInput } from "../vkx-input";
import { VkxInputProps } from "../vkx-input/vkx-input-props";

export interface VkxFileInputProps extends VkxInputProps {}

export const VkxFileInput: React.FC<VkxFileInputProps> = ({
  ...props
}) => {
  return <VkxInput type="file" {...props} />;
};
