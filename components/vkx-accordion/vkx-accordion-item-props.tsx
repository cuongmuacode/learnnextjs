import { ReactNode } from "react";

export interface VkxAccordionItemProps {
  key: string;
  title?: ReactNode;
  titleText?: "";
  subtitle?: ReactNode;
  children?: ReactNode;
  ariaLabel?: string;
  startContent?: ReactNode;
  indicator?: ReactNode;
}
