"use client"

import { VkxAlert } from "@/components/vkx-alert";
import { Button } from "@heroui/button";
import React from "react";

export default function VkxAlertPage() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className="">
      {isVisible ? (
        <div className="flex w-full flex-col gap-8">
          <VkxAlert
            title="This is a default alert"
            hideIconWrapper={false}
            color="primary"
            variant="bordered"
            radius="md"
          />
          <VkxAlert
            title="This is a default alert"
            description="Alerts are temporary notifications that provide concise feedback about an action or event."
            icon={<UserIcon />}
            color="success"
            variant="bordered"
            radius="md"
            endContent={<Button>Upgrade</Button>}
          />
          <VkxAlert
            title="This is a default alert"
            description="Alerts are temporary notifications that provide concise feedback about an action or event."
            icon={<UserIcon />}
            color="success"
            variant="bordered"
            radius="md"
            onClose={() => { setIsVisible(false) }}
            endContent={<Button>Upgrade</Button>}
          />
        </div>
      ) : (
        <Button variant="bordered"  onPress={() => setIsVisible(true)}>
          Show Alert
        </Button>
      )}
    </div>

  );
}


const UserIcon: React.FC<{ fill?: string; size?: number; height?: number; width?: number;[key: string]: any }> = ({ fill = "currentColor", size, height, width, ...props }) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
          data-name="Stroke 1"
        />
        <path d="M11.837 11.174a4.372 4.372 0 10-.031 0z" data-name="Stroke 3" />
      </g>
    </svg>
  );
};