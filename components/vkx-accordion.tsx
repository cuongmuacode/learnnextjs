"use client";

import { Accordion, AccordionItem, SelectionMode } from "@heroui/react";
import React, { ReactNode } from "react";

export interface VkxAccordionProps {
    accordionItems: {
        key: string;
        title: string;
        subtitle?: string;
        content: string;
        ariaLabel?: string;
        startContent?: ReactNode;
        indicator?: ReactNode
    }[];
    defaultExpandedKeys?: string[];
    selectionMode?: SelectionMode;
    disabledKeys?: Set<any>;
    onSelectionChange?: any;
    selectedKeys?: any;
    isCompact?: boolean;
    variant?: "splitted" | "bordered" | "light" | "shadow";
    motionProps?: any;
}

export function VkxAccordion({
    accordionItems: accordionItems,
    defaultExpandedKeys,
    selectionMode,
    isCompact,
    variant,
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
                    aria-label={item.ariaLabel || item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    startContent={item.startContent}
                    indicator={item.indicator}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}