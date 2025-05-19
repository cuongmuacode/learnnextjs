"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import { VkxAccordionProps } from "./vkx-accordion-props";

export function VkxAccordion({
  accordionItems,
  className,
  defaultExpandedKeys,
  disabledKeys,
  isCompact = false,
  motionProps,
  onSelectionChange,
  selectedKeys,
  selectionMode = "multiple",
  variant = "light",
  ...props
}: VkxAccordionProps) {
  return (
    <Accordion
      className={className}
      defaultExpandedKeys={defaultExpandedKeys}
      disabledKeys={disabledKeys}
      isCompact={isCompact}
      motionProps={motionProps}
      selectedKeys={selectedKeys}
      selectionMode={selectionMode}
      variant={variant}
      onSelectionChange={onSelectionChange}
      {...props}
    >
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.ariaLabel}
          className={item.className}
          indicator={item.indicator}
          startContent={item.startContent}
          subtitle={item.subtitle}
          textValue={item.titleText}
          title={item.title}
        >
          {item.children}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
