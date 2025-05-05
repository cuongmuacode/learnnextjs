"use client";

import { VkxAccordion } from "@/components/vkx-accordion";

export default function BlogPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const accordionItems = [
    {
      key: "1",
      title: "Accordion 1",
      content: defaultContent,
    },
    {
      key: "2",
      title: "Accordion 2",
      content: defaultContent,
    },
    {
      key: "3",
      title: "Accordion 3",
      content: defaultContent,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <VkxAccordion items={accordionItems} defaultExpandedKeys={["1"]} />
    </div>
  );
}
