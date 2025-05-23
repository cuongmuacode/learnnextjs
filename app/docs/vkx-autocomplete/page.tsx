"use client";

import React, { JSX, SVGProps } from "react";
import { Avatar } from "@heroui/react";
import {
  VkxAutocomplete,
  VkxAutocompleteOption,
} from "@/components/vkx-autocomplete/vkx-autocomplete";

export default function VkxAutocompletePage() {
  const autocompleteOptions: VkxAutocompleteOption[] = [
    { textValue: "TypeScript", value: "typescript" },
    { textValue: "JavaScript", value: "javascript" },
    {
      textValue: "Python",
      value: "python",
      startContent: (
        <Avatar
          alt="Venezuela"
          className="w-6 h-6"
          src="https://flagcdn.com/ve.svg"
        />
      ),
    },
    { textValue: "Java", value: "java" },
    { textValue: "C++", value: "cpp" },
  ];

  const [selectedKey, setSelectedKey] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);

  const isValid = selectedKey === "java";

  return (
    <div className="flex w-full flex-col gap-8">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
        VkxAutocomplete
      </h1>
      <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl">
        <b>VkxAutocomplete</b> là một component autocomplete (tự động gợi ý khi
        nhập) được xây dựng dựa trên HeroUI, hỗ trợ nhiều tính năng nâng cao như
        chọn giá trị, hiển thị icon, trạng thái disabled, validation, và kiểm
        soát giá trị từ bên ngoài. Dưới đây là các ví dụ sử dụng và bảng thuộc
        tính chi tiết.
      </p>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        1. Autocomplete cơ bản
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
      />

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        2. Autocomplete bị vô hiệu hóa
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        isDisabled
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
      />

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        3. Autocomplete với các mục bị vô hiệu hóa
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
        disabledKeys={new Set(["python"])}
      />

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        4. Autocomplete với icon và mô tả
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        label="Ngôn ngữ lập trình"
        description="Hãy chọn ngôn ngữ bạn thích"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
        startContent={<PetIcon className="text-xl" />}
        selectorIcon={<PetIcon className="text-xl" />}
        variant="bordered"
      />

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        5. Autocomplete với validation
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        isRequired
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
        errorMessage={!selectedKey ? "Vui lòng chọn một ngôn ngữ" : ""}
        selectedKey={selectedKey}
        onSelectionChange={(key) => setSelectedKey(key as string)}
      />

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        6. Autocomplete với controlled value
      </h2>
      <VkxAutocomplete
        className="max-w-xs"
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
        selectedKey={selectedKey}
        onSelectionChange={(key) => setSelectedKey(key as string)}
        onInputChange={setInputValue}
      />
      <p className="mt-1 text-sm text-gray-500">
        Giá trị đang nhập: {inputValue}
      </p>
      <p className="text-sm text-gray-500">Giá trị đã chọn: {selectedKey}</p>

      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        7. Với Thông Báo Lỗi
      </h2>
      <p>
        Bạn có thể kết hợp hai thuộc tính isInvalid và errorMessage để hiển thị
        thông báo lỗi cho thành phần Autocomplete khi giá trị không hợp lệ.
      </p>
      <VkxAutocomplete
        className="max-w-xs"
        label="Ngôn ngữ lập trình"
        options={autocompleteOptions}
        placeholder="Chọn ngôn ngữ lập trình"
        errorMessage={isValid || !touched ? "" : "You must select a Java"}
        selectedKey={selectedKey}
        isInvalid={isValid || !touched ? false : true}
        onSelectionChange={(key) => setSelectedKey(key as string)}
        onClose={() => setTouched(true)}
      />
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h2>

        <h3 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxAutocomplete Props
        </h3>
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
                <td className="border px-4 py-2">options</td>
                <td className="border px-4 py-2">VkxAutocompleteOption[]</td>
                <td className="border px-4 py-2">required</td>
                <td className="border px-4 py-2">
                  Danh sách các lựa chọn autocomplete
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">placeholder</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Văn bản gợi ý</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nhãn của autocomplete</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">description</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Mô tả bổ sung</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">errorMessage</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Thông báo lỗi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">selectedKey</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị đang được chọn</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">disabledKeys</td>
                <td className="border px-4 py-2">Set&lt;string&gt;</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Các lựa chọn bị vô hiệu hóa
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onSelectionChange</td>
                <td className="border px-4 py-2">(key: string) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Xử lý khi lựa chọn thay đổi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa autocomplete</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Bắt buộc phải chọn</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isInvalid</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2 ">Giá trị không hợp lệ.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onInputChange</td>
                <td className="border px-4 py-2">(value: string) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Xử lý khi giá trị input thay đổi
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">size</td>
                <td className="border px-4 py-2">"sm" | "md" | "lg"</td>
                <td className="border px-4 py-2">"md"</td>
                <td className="border px-4 py-2">Kích thước</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">color</td>
                <td className="border px-4 py-2">
                  "default" | "primary" | "secondary" | "success" | "warning" |
                  "danger"
                </td>
                <td className="border px-4 py-2">"default"</td>
                <td className="border px-4 py-2">Màu sắc</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">variant</td>
                <td className="border px-4 py-2">
                  "flat" | "bordered" | "faded" | "underlined"
                </td>
                <td className="border px-4 py-2">"flat"</td>
                <td className="border px-4 py-2">Kiểu dáng</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">labelPlacement</td>
                <td className="border px-4 py-2">
                  "inside" | "outside" | "outside-left"
                </td>
                <td className="border px-4 py-2">"outside"</td>
                <td className="border px-4 py-2">Vị trí của label</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">startContent</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Nội dung ở đầu autocomplete
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">selectorIcon</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Icon hiển thị ở selector</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">scrollShadowProps</td>
                <td className="border px-4 py-2">object</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Cấu hình hiệu ứng shadow khi cuộn
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxAutocompleteOption Props
        </h3>
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
                <td className="border px-4 py-2">textValue</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">required</td>
                <td className="border px-4 py-2">Nội dung hiển thị</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">required</td>
                <td className="border px-4 py-2">Giá trị của lựa chọn</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">startContent</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nội dung ở đầu lựa chọn</td>
              </tr>
            </tbody>
          </table>
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
