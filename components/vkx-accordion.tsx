"use client";

import { Accordion, AccordionItem } from "@heroui/react";

interface VkxAccordionProps {
  items: {
    key: string;
    title: string;
    content: string;
    ariaLabel?: string;
  }[];
  defaultExpandedKeys?: string[];
  className?: string;
}

export function VkxAccordion({ items, defaultExpandedKeys, className }: VkxAccordionProps) {
  return (
    <div className={`flex w-full flex-col gap-4 ${className || ''}`}>
      <Accordion defaultExpandedKeys={defaultExpandedKeys}>
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.ariaLabel || item.title}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}