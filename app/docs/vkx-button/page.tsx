"use client";

import React, { JSX, SVGProps } from "react";
import { ButtonGroup } from "@heroui/button";

import VkxButton from "@/components/vkx-button/vkx-button";

export default function VkxButtonPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Cơ bản
        </h1>
      </div>
      <div>
        <VkxButton>Cơ bản</VkxButton>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Không cho nhấn
        </h1>
      </div>
      <div>
        <VkxButton isDisabled>Không cho nhấn</VkxButton>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Đang tải và không cho ấn
        </h1>
      </div>
      <div>
        <VkxButton isLoading>Không cho nhấn</VkxButton>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Icon button
        </h1>
      </div>
      <div>
        <VkxButton isIconOnly>
          <PetIcon />
        </VkxButton>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Thao tác với button
        </h1>
      </div>
      <div>
        <VkxButton onPress={() => setValue("3")}>Nhấn vào đây</VkxButton>

        <p className="pt-4">1 + 2 = {value}</p>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Nhóm button
        </h1>
      </div>
      <div>
        <ButtonGroup>
          <VkxButton>Button 1</VkxButton>
          <VkxButton>Button 2</VkxButton>
          <VkxButton>Button 3</VkxButton>
        </ButtonGroup>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          7. Không cho nhấn nhóm button
        </h1>
      </div>
      <div>
        <ButtonGroup isDisabled>
          <VkxButton>Button 1</VkxButton>
          <VkxButton>Button 2</VkxButton>
          <VkxButton>Button 3</VkxButton>
        </ButtonGroup>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxButton Props
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
                  children
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung hiển thị bên trong button
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
                  Vô hiệu hóa button, không cho phép tương tác
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isLoading
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hiển thị trạng thái đang tải và vô hiệu hóa button
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isIconOnly
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Định dạng button chỉ chứa icon
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onPress
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (event) {"=>"} void
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm xử lý sự kiện khi button được nhấn
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          ButtonGroup Props
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
                  children
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Các button con trong nhóm
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
                  Vô hiệu hóa tất cả các button trong nhóm
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">
            Lưu ý về ReactNode
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            Các thuộc tính có kiểu <code>ReactNode</code> cho phép bạn truyền
            vào:
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-600 dark:text-blue-300">
            <li>Chuỗi văn bản đơn giản</li>
            <li>Số</li>
            <li>Phần tử JSX/TSX</li>
            <li>Component React</li>
            <li>null hoặc undefined</li>
            <li>Mảng các phần tử trên</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const PetIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M19.0803 15.7203C18.4903 12.1903 15.1003 9.32031 11.5203 9.32031C7.63028 9.32031 4.21028 12.4703 3.88028 16.3503C3.75028 17.8503 4.23028 19.2703 5.22028 20.3403C6.20028 21.4103 7.58028 22.0003 9.08028 22.0003H13.7603C15.4503 22.0003 16.9303 21.3403 17.9403 20.1503C18.9503 18.9603 19.3503 17.3803 19.0803 15.7203Z"
        fill="currentColor"
      />
      <path
        d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
        fill="currentColor"
      />
      <path
        d="M16.94 9.02844C18.2876 9.02844 19.38 7.93601 19.38 6.58844C19.38 5.24086 18.2876 4.14844 16.94 4.14844C15.5924 4.14844 14.5 5.24086 14.5 6.58844C14.5 7.93601 15.5924 9.02844 16.94 9.02844Z"
        fill="currentColor"
      />
      <path
        d="M20.5496 12.9313C21.6266 12.9313 22.4996 12.0582 22.4996 10.9812C22.4996 9.90429 21.6266 9.03125 20.5496 9.03125C19.4727 9.03125 18.5996 9.90429 18.5996 10.9812C18.5996 12.0582 19.4727 12.9313 20.5496 12.9313Z"
        fill="currentColor"
      />
      <path
        d="M3.94 10.9816C5.28757 10.9816 6.38 9.88914 6.38 8.54156C6.38 7.19399 5.28757 6.10156 3.94 6.10156C2.59243 6.10156 1.5 7.19399 1.5 8.54156C1.5 9.88914 2.59243 10.9816 3.94 10.9816Z"
        fill="currentColor"
      />
    </svg>
  );
};
