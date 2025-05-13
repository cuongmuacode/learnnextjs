"use client";

import { VkxAccordion } from "@/components/vkx-accordion/vkx-accordion";
import {
  VkxAutocomplete,
  VkxAutocompleteOption,
} from "@/components/vkx-autocomplete";

export default function BlogPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

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
  ];

  const autocompleteOptions: VkxAutocompleteOption[] = [
    { textValue: "TypeScript", value: "typescript" },
    { textValue: "JavaScript", value: "javascript" },
    { textValue: "Python", value: "python" },
    { textValue: "Java", value: "java" },
    { textValue: "C++", value: "cpp" },
  ];

  const handleSelectionChange = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <VkxAutocomplete
        label="Programming Language"
        options={autocompleteOptions}
        placeholder="Select a programming language"
        onSelectionChange={handleSelectionChange}
      />

      <VkxAccordion
        accordionItems={accordionItems}
        defaultExpandedKeys={new Set(["1"])}
      />
    </div>
  );
}
