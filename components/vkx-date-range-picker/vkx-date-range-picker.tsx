"use client";
import React from "react";
import { DateRangePicker, DateRangePickerProps } from "@heroui/react";

export interface VkxDateRangePickerProps extends DateRangePickerProps {
  label?: React.ReactNode;
  value?: any;
  // ...add other props as needed from your prop table
}

export const VkxDateRangePicker: React.FC<VkxDateRangePickerProps> = (
  props,
) => {
  return <DateRangePicker {...props} />;
};
