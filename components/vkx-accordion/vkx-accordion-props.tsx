import { Selection, SelectionMode } from "@react-types/shared";
import { AccordionProps } from "@heroui/react";

import { VkxAccordionItemProps } from "./vkx-accordion-item-props";

export interface VkxAccordionProps extends AccordionProps {
  accordionItems: VkxAccordionItemProps[];
  defaultExpandedKeys?: Set<string>;
  disabledKeys?: Set<string>;
  isCompact?: boolean;
  motionProps?: any;
  onSelectionChange?: (key: Selection) => void | undefined;
  selectedKeys?: Set<string>;
  selectionMode?: SelectionMode;
  variant?: "splitted" | "bordered" | "light" | "shadow";
  className?: string | undefined;
}
