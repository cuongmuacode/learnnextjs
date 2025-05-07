"use client";

import { Accordion, AccordionItem, SelectionMode } from "@heroui/react";
import React, { ReactNode } from "react";
import { VkxAccordionProps } from "./vkx-accordion-props";

export function VkxAccordion({
    accordionItems: accordionItems,
    defaultExpandedKeys,
    selectionMode = "multiple",
    isCompact = false,
    variant = "light",
    disabledKeys,
    motionProps,
    selectedKeys,
    onSelectionChange,
}: VkxAccordionProps) {
    return (
        <Accordion
            defaultExpandedKeys={defaultExpandedKeys}
            disabledKeys={disabledKeys}
            selectionMode={selectionMode}
            isCompact={isCompact}
            variant={variant}
            motionProps={motionProps}
            selectedKeys={selectedKeys}
            onSelectionChange={onSelectionChange}
        >
            {accordionItems.map((item) => (
                <AccordionItem
                    key={item.key}
                    aria-label={item.ariaLabel}
                    title={item.title}
                    subtitle={item.subtitle}
                    startContent={item.startContent}
                    indicator={item.indicator}
                >
                    {item.children}
                </AccordionItem>
            ))}
        </Accordion>
    );
}