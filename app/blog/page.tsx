"use client";

import { VkxAccordion } from "@/components/vkx-accordion/vkx-accordion";
import { VkxAutocomplete, VkxAutocompleteOption } from "@/components/vkx-autocomplete";

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
    { label: "TypeScript", value: "typescript" },
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C++", value: "cpp" },
  ];

  const handleSelectionChange = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <VkxAutocomplete 
        options={autocompleteOptions}
        placeholder="Select a programming language"
        label="Programming Language"
        onSelectionChange={handleSelectionChange}
      />
      
      <VkxAccordion accordionItems={accordionItems} defaultExpandedKeys={["1"]} />
    </div>
  );
}
