import { Checkbox, CheckboxProps } from "@heroui/react";
import React from "react";

export interface VkxCheckboxProps extends CheckboxProps {
  className?: string; // add className prop
}

export const VkxCheckbox: React.FC<VkxCheckboxProps> = (props) => {
  return <Checkbox {...props} className={props.className} />;
};

export default VkxCheckbox;
