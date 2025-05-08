"use client";
import { VkxAccordion } from "@/components/vkx-accordion/vkx-accordion";
import { JSX, SVGProps, useState } from "react";
import accordionItems from '../../../app/api/accordions.json';
import { VkxAccordionProps } from "@/components/vkx-accordion/vkx-accordion-props";
import { VkxAccordionItemProps } from "@/components/vkx-accordion/vkx-accordion-item-props";
import { Avatar } from "@heroui/react";

export default function AccordionPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  var accordionItemsCustomTitle = accordionItems.map<VkxAccordionItemProps>((item) => ({
    key: item.key,
    title: (
      <div className="flex items-center gap-2">
        <p className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
        {item.link && (
          <a
            href={item.link}
            className="text-blue-500 underline hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        )}
      </div>
    ),
    children: (
      <div className="text-gray-600 dark:text-gray-400">
        {item.content}
      </div>
    ),
    subtitle: item.subtitle && (
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
    ),
    startContent: item.imageUrl && (
      <Avatar
        isBordered
        color="warning"
        radius="lg"
        src={item.imageUrl}
        alt={`${item.title} image`}
      />
    ),
  }));

  var accordionItemsWithSubtitle = accordionItems.map((item) =>
  ({
    key: item.key,
    title: item.title,
    children: item.content,
    subtitle: item.subtitle,
  }));

  const accordionProps: VkxAccordionProps = {
    accordionItems: accordionItems.map((item) => ({
      key: item.key,
      title: item.title,
      children: item.content
    })),
  };
  var defaultExpandedKey = accordionItemsWithSubtitle[0].key;


  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 1: chỉ chọn một  </h1>
        <div>
          <p>
            selectionMode-single <br />
          </p>
        </div>

        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionProps.accordionItems}
            selectionMode="single"
            variant="bordered"
          />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 2: cho phép chọn nhiều </h1>
        <div>
          <p>
            selectionMode-multiple <br />
          </p>
        </div>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionProps.accordionItems}
            selectionMode="multiple"
            variant="bordered" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 3: Sử dụng phụ đề</h1>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionItemsWithSubtitle}
            variant="bordered" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 4: Mặc định chọn một phần tử</h1>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionItemsWithSubtitle}
            defaultExpandedKeys={new Set([defaultExpandedKey])}
            variant="bordered" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 5: Không cho phép chọn một phần tử</h1>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionItemsWithSubtitle}
            disabledKeys={new Set([defaultExpandedKey])}
            variant="bordered" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 5: điều khiển mỗi khi chọn</h1>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionItemsWithSubtitle}
            onSelectionChange={(keys) => {
              console.log(keys);
              setSelected(keys as Set<string>);
            }}
            variant="bordered"
          />
        </div>
        <div className="pt-3">
          <h1 className="text-xl font-medium text-black dark:text-white">Các keys đã chọn: </h1>
          {Array.from(selected).map((item) => (<span key={item}>Key: {item} <br /></span>))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">Trường hợp 5: Cho phép viết thêm html vào title, content</h1>
        <div className="mx-auto flex pt-6">
          <VkxAccordion
            accordionItems={accordionItemsCustomTitle}
            variant="bordered" />
        </div>
      </div>
    </div>
  );
}

const AnchorIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height="24"
      role="presentation"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
        fill="currentColor"
      />
      <path
        d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
        fill="currentColor"
      />
    </svg>
  );
};