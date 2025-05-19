"use client";

import React from "react";

import { VkxTextArea } from "@/components/vkx-text-area/vkx-text-area";

function CharacterCountTextArea() {
  const [value, setValue] = React.useState("");
  const maxLength = 200;

  return (
    <div className="max-w-lg">
      <VkxTextArea
        description={`Số ký tự: ${value.length}/${maxLength}`}
        errorMessage={
          value.length > maxLength ? `Vượt quá ${maxLength} ký tự!` : ""
        }
        isInvalid={value.length > maxLength}
        label="Mô tả có bộ đếm ký tự"
        maxRows={6}
        minRows={2}
        placeholder="Nhập mô tả..."
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
}

function ControlledTextAreaExample() {
  const [controlledValue, setControlledValue] = React.useState("");

  return (
    <div className="max-w-lg">
      <VkxTextArea
        description="Ví dụ sử dụng value và onValueChange để kiểm soát giá trị."
        label="Controlled TextArea"
        placeholder="Nhập nội dung..."
        value={controlledValue}
        onValueChange={setControlledValue}
      />
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Giá trị hiện tại: <span className="font-mono">{controlledValue}</span>
      </div>
    </div>
  );
}

export default function VkxTextAreaPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. TextArea với label, placeholder, description
        </h1>
        <VkxTextArea
          className="max-w-lg"
          description="Hãy nhập mô tả chi tiết cho sản phẩm của bạn."
          label="Mô tả"
          placeholder="Nhập mô tả..."
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. TextArea có validation (bắt buộc nhập)
        </h1>
        <VkxTextArea
          className="max-w-lg"
          errorMessage={!value ? "Vui lòng nhập mô tả" : ""}
          isInvalid={!value}
          label="Mô tả bắt buộc"
          placeholder="Nhập mô tả..."
          value={value}
          onValueChange={setValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. TextArea tự động co giãn chiều cao (minRows, maxRows)
        </h1>
        <VkxTextArea
          className="max-w-lg"
          label="Mô tả co giãn"
          maxRows={6}
          minRows={2}
          placeholder="Nhập mô tả..."
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          4. TextArea có bộ đếm ký tự
        </h1>
        <CharacterCountTextArea />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          5. TextArea disabled
        </h1>
        <VkxTextArea
          isDisabled
          className="max-w-lg"
          label="Không thể nhập"
          placeholder="Không thể nhập"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          6. TextArea readOnly
        </h1>
        <VkxTextArea
          readOnly
          className="max-w-lg"
          label="Chỉ đọc"
          value="Nội dung chỉ đọc"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          7. Controlled TextArea
        </h1>
        <ControlledTextAreaExample />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          8. TextArea không tự động co giãn (disableAutosize)
        </h1>
        <VkxTextArea
          disableAutosize
          className="max-w-lg"
          description="Textarea này không tự động thay đổi chiều cao."
          label="Không autosize"
          minRows={4}
          placeholder="Nhập nội dung..."
        />
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxTextArea Props
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
                  className
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Class Tailwind tuỳ chỉnh
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  label
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nhãn hiển thị cho textarea
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  placeholder
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Gợi ý nhập liệu
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  defaultValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị mặc định
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  value
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị textarea (controlled)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onValueChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (value: string) =&gt; void
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm callback khi thay đổi giá trị
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
                  Vô hiệu hóa textarea
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isInvalid
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Trạng thái lỗi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  errorMessage
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Thông báo lỗi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  description
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Mô tả thêm cho textarea
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  labelPlacement
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;inside&quot; | &quot;outside&quot; |
                  &quot;outside-left&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;outside&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Vị trí nhãn
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  minRows
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  number
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Số dòng tối thiểu
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  maxRows
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  number
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Số dòng tối đa
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  readOnly
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Chỉ đọc
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
