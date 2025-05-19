"use client";

import React from "react";

import { VkxLink } from "@/components/vkx-link/vkx-link";

export default function VkxLinkPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. Link cơ bản
        </h1>
        <VkxLink href="https://www.google.com">Google</VkxLink>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Link external (mở tab mới)
        </h1>
        <VkxLink isExternal href="https://www.heroui.com">
          HeroUI Docs
        </VkxLink>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. Link disabled
        </h1>
        <VkxLink isDisabled href="#">
          Không thể click
        </VkxLink>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          4. Link với icon (showAnchorIcon)
        </h1>
        <VkxLink isExternal showAnchorIcon href="https://www.heroui.com">
          HeroUI với icon
        </VkxLink>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          5. Link block
        </h1>
        <VkxLink isBlock color="primary" href="#">
          Link dạng block (chiếm toàn bộ chiều ngang)
        </VkxLink>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxLink Props
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
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  href
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Đường dẫn liên kết
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  children
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung hiển thị
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isExternal
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Mở liên kết ở tab mới
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isDisabled
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Vô hiệu hóa link
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isBlock
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Link dạng block (chiếm toàn bộ chiều ngang)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  color
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "foreground" | "primary" | "secondary" | "success" | "warning"
                  | "danger"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "primary"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Màu sắc của link
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  underline
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "none" | "hover" | "always" | "active" | "focus"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "none"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kiểu gạch chân
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  showAnchorIcon
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hiển thị icon external
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  anchorIcon
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Tùy chỉnh icon external
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  disableAnimation
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Tắt hiệu ứng hover
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
