import { ReactNode } from "react";

export interface VkxAccordionItemProps {
    key: string;
    title?: ReactNode;
    subtitle?: ReactNode;
    children?: ReactNode;
    ariaLabel?: string;
    startContent?: ReactNode;
    indicator?: ReactNode
}