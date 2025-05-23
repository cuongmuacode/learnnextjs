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

  const formComponents: NavigationModels[] = [
    { name: "Autocomplete", href: "/docs/vkx-autocomplete" },
    { name: "Button", href: "/docs/vkx-button" },
    { name: "Checkbox", href: "/docs/vkx-checkbox" },
    { name: "Calendar", href: "/docs/vkx-calendar" },

    { name: "CheckboxGroup", href: "/docs/vkx-checkbox-group" },
    { name: "DatePicker", href: "/docs/vkx-date-picker" },
    { name: "DateInput", href: "/docs/vkx-date-input" },
    { name: "MonthPicker", href: "/docs/vkx-month-picker" },
    { name: "NumberInput", href: "/docs/vkx-number-input" },
    { name: "YearPicker", href: "/docs/vkx-year-picker" },

    { name: "DateRangePicker", href: "/docs/vkx-date-range-picker" },

    { name: "Form", href: "/docs/vkx-form" },
    { name: "FileInput", href: "/docs/vkx-file-input" },

    { name: "Input", href: "/docs/vkx-input" },
    { name: "Link", href: "/docs/vkx-link" },
    { name: "Popover", href: "/docs/vkx-popover" },
    { name: "PasswordInput", href: "/docs/vkx-password-input" },
    { name: "RadioGroup", href: "/docs/vkx-radio-group" },
    { name: "RangeCalender", href: "/docs/vkx-range-calender" },

    { name: "Select", href: "/docs/vkx-select" },
    { name: "SearchInput", href: "/docs/vkx-search-input" },
    { name: "Switch", href: "/docs/vkx-switch" },
    { name: "Slider", href: "/docs/vkx-slider" },
    { name: "Snippet", href: "/docs/vkx-snippet" },
    { name: "Skeleton", href: "/docs/vkx-skeleton" },

    { name: "TextArea", href: "/docs/vkx-text-area" },
    { name: "TimeInput", href: "/docs/vkx-time-input" },
 
    { name: "Table", href: "/docs/vkx-table" },
    { name: "Tooltip", href: "/docs/vkx-tooltip" },
  ];
  const layoutComponents: NavigationModels[] = [];
  const notificationComponents: NavigationModels[] = [];
  const displayComponents: NavigationModels[] = [
    { name: "Accordion", href: "/docs/vkx-accordion" },
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
                <p className="text-xl font-semibold text-foreground">
                  Components
                </p>
              ),
              children: (
                <VkxAccordion
                  accordionItems={[
                    // Form components
                    {
                      key: "form-components",
                      title: (
                        <h3 className="text-lg font-semibold text-foreground">
                          Form
                        </h3>
                      ),
                      children: (
                        <nav className="flex flex-col gap-1">
                          {formComponents.map((item) => (
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
                    // Layout components
                    {
                      key: "layout-components",
                      title: (
                        <p className="text-lg font-semibold text-foreground">
                          Layout
                        </p>
                      ),
                      children: (
                        <nav className="flex flex-col gap-1">
                          {layoutComponents.map((item) => (
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
                    // Notification components
                    {
                      key: "notification-components",
                      title: (
                        <h3 className="text-lg font-semibold text-foreground">
                          Notification
                        </h3>
                      ),
                      children: (
                        <nav className="flex flex-col gap-1">
                          {notificationComponents.map((item) => (
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
                    // Display components
                    {
                      key: "display-component",
                      title: (
                        <p className="text-lg font-semibold text-foreground">
                          Display
                        </p>
                      ),
                      children: (
                        <nav className="flex flex-col gap-1">
                          {displayComponents.map((item) => (
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
                ></VkxAccordion>
              ),
            },
          ]}
          className="pb-16"
          defaultExpandedKeys={new Set(["component"])}
        ></VkxAccordion>
      </div>
      {/* Main content */}
      <div className="flex-1 ml-64">{children}</div>
    </div>
  );
}
