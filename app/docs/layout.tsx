"use client";

import { Link } from "@heroui/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { VkxAccordion } from "@/components/vkx-accordion/vkx-accordion";
import { NavigationModels } from "@/models/navigation-models";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const components: NavigationModels[] = [
    { name: "Accordion", href: "/docs/vkx-accordion" },
    { name: "Alert", href: "/docs/vkx-alert" },
    { name: "Autocomplete", href: "/docs/vkx-autocomplete" },
    { name: "Avatar", href: "/docs/vkx-avatar" },
    { name: "Badge", href: "/docs/vkx-badge" },
    { name: "Breadcrumbs", href: "/docs/vkx-breadcrumbs" },
    { name: "Button", href: "/docs/vkx-button" },
    { name: "Calendar", href: "/docs/vkx-calendar" },
    { name: "Card", href: "/docs/vkx-card" },
    { name: "Checkbox", href: "/docs/vkx-checkbox" },
    { name: "Checkbox Group", href: "/docs/vkx-checkbox-group" },
    { name: "Chip", href: "/docs/vkx-chip" },
    { name: "Circular Progress", href: "/docs/vkx-circular-progress" },
    { name: "Code", href: "/docs/vkx-code" },
    { name: "Date Input", href: "/docs/vkx-date-input" },
    { name: "Date Picker", href: "/docs/vkx-date-picker" },
    { name: "Date Range Picker", href: "/docs/vkx-date-range-picker" },
    { name: "Divider", href: "/docs/vkx-divider" },
    { name: "Drawer", href: "/docs/vkx-drawer" },
    { name: "Dropdown", href: "/docs/vkx-dropdown" },
    { name: "Input", href: "/docs/vkx-input" },
    { name: "Select", href: "/docs/vkx-select" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="w-64 h-[calc(100vh-64px)] 
          overflow-y-auto fixed left-0 top-16 dark:bg-black border-r border-divider"
      >
        <VkxAccordion
          accordionItems={[
            {
              key: "component",
              title: (
                <h2 className="text-xl font-semibold text-foreground">
                  Components
                </h2>
              ),
              children: (
                <nav className="flex flex-col gap-1">
                  {components.map((item) => (
                    <Link
                      key={item.name}
                      className={clsx(
                        "px-3 py-2 rounded-lg transition-colors",
                        "hover:bg-default-100",
                        pathname === item.href
                          ? "bg-default-100 text-default-foreground"
                          : "text-default-500"
                      )}
                      href={item.href}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{item.name}</span>
                        {item.status && (
                          <span className="text-xs text-primary-500">
                            {item.status}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </nav>
              ),
            },
          ]}
          className="pb-16"
          defaultExpandedKeys={new Set(["component"])}
        />
      </div>
      {/* Main content */}
      <div className="flex-1 ml-64">{children}</div>
    </div>
  );
}
