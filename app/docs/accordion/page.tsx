
"use client";
import { VkxAccordion, VkxAccordionProps } from "@/components/vkx-accordion";
import { Avatar } from "@heroui/react";
import { JSX, SVGProps } from "react";


export default function DocsPage() {
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

  const accordionProps: VkxAccordionProps = {
    accordionItems: [
      {
        key: "1",
        title: "Giới thiệu",
        subtitle: "Phần giới thiệu ngắn",
        content: "Đây là nội dung của phần giới thiệu.",
        ariaLabel: "Giới thiệu",
        indicator: null,
      },
      {
        key: "2",
        title: "Lưu Mạnh Cường",
        subtitle: "#cuongmuacode",
        ariaLabel: "cường",
        indicator: <AnchorIcon />,
        startContent:
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />,

        content: "Ngày sinh: 17-08-2001",
      },
      
      {
        key: "3",
        title: "Chi tiết",
        subtitle: "Chi tiết",
        content: "Đây là phần nội dung chi tiết.",
      },

      {
        key: "4",
        title: "Tổng kết",
        subtitle: "Kết luận và nhận xét",
        content: "Phần tổng kết nội dung ở đây.",
      },
    ],
    defaultExpandedKeys: ["1"],
    selectionMode: "multiple",
    isCompact: false,
    // variant: "bordered",
    // variant:"shadow",
    // variant:"light",
    variant:"splitted",
    disabledKeys: new Set(["3"]),
    motionProps: {
      duration: 300,
      easing: "ease-in-out"
    },
    onSelectionChange: (keys: Set<string>) => {
      console.log("Selected keys:", keys);
    },
    selectedKeys: new Set(["1"]),
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <VkxAccordion
        accordionItems={accordionProps.accordionItems}
        defaultExpandedKeys={accordionProps.defaultExpandedKeys}
        isCompact={accordionProps.isCompact}
        motionProps={accordionProps.motionProps}
        variant={accordionProps.variant}
        disabledKeys={accordionProps.disabledKeys}
        selectionMode={accordionProps.selectionMode}
      // selectedKeys={accordionProps.selectedKeys}
      />
    </div>
  );
}