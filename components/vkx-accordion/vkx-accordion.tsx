"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

import { VkxAccordionProps } from "./vkx-accordion-props";

export function VkxAccordion({
  accordionItems,
  defaultExpandedKeys,
  disabledKeys,
  isCompact = false,
  motionProps,
  onSelectionChange,
  selectedKeys,
  selectionMode = "multiple",
  variant = "light",
}: VkxAccordionProps) {
  return (
    <Accordion
      defaultExpandedKeys={defaultExpandedKeys}
      disabledKeys={disabledKeys}
      isCompact={isCompact}
      motionProps={motionProps}
      selectedKeys={selectedKeys}
      selectionMode={selectionMode}
      variant={variant}
      onSelectionChange={onSelectionChange}
    >
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.ariaLabel}
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
