import { VkxAccordionItemProps } from "./vkx-accordion-item-props";
import { Selection, SelectionMode } from "@react-types/shared";

export interface VkxAccordionProps {
    accordionItems: VkxAccordionItemProps[];
    defaultExpandedKeys?: Set<string>;
    selectionMode?: SelectionMode;
    disabledKeys?: Set<string>;
    selectedKeys?: Set<string>;
    isCompact?: boolean;
    variant?: "splitted" | "bordered" | "light" | "shadow";
    onSelectionChange?: (key:Selection)=>void | undefined;
    motionProps?: any;
}
