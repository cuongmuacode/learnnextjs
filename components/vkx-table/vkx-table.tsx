"use client";

import React, { ReactNode } from "react";
import { Table, TableProps } from "@heroui/react";

export interface VkxTableProps {
  children: ReactNode;
}

export const VkxTable: React.FC<VkxTableProps> = ({ children, ...props }) => {
  return <Table {...props}></Table>;
};

export default VkxTable;
