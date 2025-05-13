import { ReactNode } from "react";

export interface VkxSelectItem {
  key: string;
  children?: ReactNode;
  parentKey?: string;
  description?: string;
  startContent?: ReactNode;
}
