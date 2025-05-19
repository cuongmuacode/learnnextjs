"use client";

import React from "react";

import VkxCheckbox from "@/components/vkx-checkbox/vkx-checkbox";

export default function VkxCheckboxPage() {
  const [checked, setChecked] = React.useState(false);
  const [checkedMulti, setCheckedMulti] = React.useState<{
    [key: string]: boolean;
  }>({ a: false, b: false, c: false });

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. Checkbox cơ bản
        </h1>
        <VkxCheckbox>Tôi đồng ý với điều khoản</VkxCheckbox>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Checkbox có kiểm soát (controlled)
        </h1>
        <VkxCheckbox isSelected={checked} onValueChange={setChecked}>
          Nhận thông báo qua email
        </VkxCheckbox>
        <p className="mt-2 text-sm text-gray-500">
          Trạng thái: {checked ? "Đã chọn" : "Chưa chọn"}
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. Checkbox bị vô hiệu hóa
        </h1>
        <VkxCheckbox isDisabled>Không thể chọn</VkxCheckbox>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          4. Checkbox với mô tả
        </h1>
        <VkxCheckbox>Chấp nhận nhận email quảng cáo</VkxCheckbox>
        <p className="text-xs text-gray-500 mt-1">
          Bạn có thể hủy bất cứ lúc nào.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          5. Checkbox nhiều lựa chọn (multi)
        </h1>
        <div className="flex flex-col gap-2">
          <VkxCheckbox
            isSelected={checkedMulti.a}
            onValueChange={(v) => setCheckedMulti((m) => ({ ...m, a: v }))}
          >
            Lựa chọn A
          </VkxCheckbox>
          <VkxCheckbox
            isSelected={checkedMulti.b}
            onValueChange={(v) => setCheckedMulti((m) => ({ ...m, b: v }))}
          >
            Lựa chọn B
          </VkxCheckbox>
          <VkxCheckbox
            isSelected={checkedMulti.c}
            onValueChange={(v) => setCheckedMulti((m) => ({ ...m, c: v }))}
          >
            Lựa chọn C
          </VkxCheckbox>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Đã chọn:{" "}
          {Object.entries(checkedMulti)
            .filter(([_, v]) => v)
            .map(([k]) => k.toUpperCase())
            .join(", ") || "Không có"}
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxCheckbox Props
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
                  isSelected
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Trạng thái đã chọn (controlled)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onValueChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (value: boolean) =&gt; void
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm callback khi giá trị thay đổi
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
                  Vô hiệu hóa checkbox
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  children
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  React.ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung hiển thị bên cạnh checkbox
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  defaultSelected
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Trạng thái mặc định (uncontrolled)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  className
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Class CSS tuỳ chỉnh
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
