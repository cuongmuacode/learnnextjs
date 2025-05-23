"use client";
import React from "react";
import { Button } from "@heroui/react";
import { VkxTooltip } from "@/components/vkx-tooltip/vkx-tooltip";

export default function VkxTooltipPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
        VkxTooltip
      </h1>
      <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl">
        <b>VkxTooltip</b> là một wrapper cho Tooltip của HeroUI, giúp hiển thị
        thông tin nhỏ khi người dùng di chuột hoặc focus vào một phần tử.
        Tooltip giúp cung cấp thông tin bổ sung mà không làm rối giao diện.
      </p>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        1. Tooltip cơ bản
      </h2>
      <VkxTooltip content="Tooltip đơn giản">
        <Button color="primary" key="btn1">
          Di chuột vào tôi
        </Button>
      </VkxTooltip>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        2. Tooltip với vị trí tuỳ chỉnh
      </h2>
      <div className="flex gap-4 flex-wrap">
        <VkxTooltip content="Trên" placement="top">
          <Button key="top">Top</Button>
        </VkxTooltip>
        <VkxTooltip content="Dưới" placement="bottom">
          <Button key="bottom">Bottom</Button>
        </VkxTooltip>
        <VkxTooltip content="Trái" placement="left">
          <Button key="left">Left</Button>
        </VkxTooltip>
        <VkxTooltip content="Phải" placement="right">
          <Button key="right">Right</Button>
        </VkxTooltip>
      </div>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        3. Tooltip với màu sắc và icon
      </h2>
      <VkxTooltip content={<span>Thành công!</span>} color="success">
        <Button color="success" key="success">
          Success
        </Button>
      </VkxTooltip>
      <VkxTooltip content={<span>Lỗi!</span>} color="danger">
        <Button color="danger" key="danger">
          Danger
        </Button>
      </VkxTooltip>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        4. Tooltip nâng cao
      </h2>
      <VkxTooltip content="Có mũi tên" showArrow>
        <Button key="arrow">Show Arrow</Button>
      </VkxTooltip>
      <VkxTooltip content="Delay 1s" delay={1000}>
        <Button key="delay">Delay</Button>
      </VkxTooltip>

      <div className="mt-12">
        <h2 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Thuộc tính
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Kiểu dữ liệu
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Mặc định
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Mô tả
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border px-4 py-2">content</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Nội dung hiển thị trong tooltip
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">placement</td>
                <td className="border px-4 py-2">
                  "top" | "bottom" | "left" | "right" | ...
                </td>
                <td className="border px-4 py-2">"top"</td>
                <td className="border px-4 py-2">Vị trí hiển thị tooltip</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">color</td>
                <td className="border px-4 py-2">
                  "default" | "primary" | "secondary" | "success" | "warning" |
                  "danger"
                </td>
                <td className="border px-4 py-2">"default"</td>
                <td className="border px-4 py-2">Màu sắc của tooltip</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">showArrow</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Hiển thị mũi tên</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">delay</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">Độ trễ khi hiển thị (ms)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa tooltip</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isOpen</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Kiểm soát trạng thái mở/đóng
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">defaultOpen</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Mở mặc định khi render</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onOpenChange</td>
                <td className="border px-4 py-2">
                  (isOpen: boolean) =&gt; void
                </td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Callback khi trạng thái mở/đóng thay đổi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onClose</td>
                <td className="border px-4 py-2">() =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi đóng tooltip</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">classNames</td>
                <td className="border px-4 py-2">object</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Tuỳ chỉnh class cho các phần tử
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">motionProps</td>
                <td className="border px-4 py-2">object</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Tuỳ chỉnh animation (framer-motion)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
