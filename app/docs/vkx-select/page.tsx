"use client";

import React, { JSX } from "react";
import { Avatar, Button } from "@heroui/react";

import selectItems from "../../api/select-items.json";

import { VkxSelect } from "@/components/vkx-select/vkx-select";
import { VkxSelectItem } from "@/components/vkx-select/vkx-select-item";

export default function VkxSelectPage() {
  const [selectOptions, setSelectOptions] = React.useState<VkxSelectItem[]>([]);
  const [selectedKey, setSelectedKey] = React.useState(new Set<string>([]));
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSelectOptions(
        selectItems.map<VkxSelectItem>((item) => ({
          key: item.key,
          children: item.label,
          description: item.key !== "3" ? item.description : undefined,
          startContent:
            item.key === "3" ? (
              <Avatar
                alt="Venezuela"
                className="w-6 h-6"
                src="https://flagcdn.com/ve.svg"
              />
            ) : undefined,
        })),
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Select cơ bản
        </h1>
      </div>
      <div>
        <VkxSelect
          className="max-w-xs"
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Select không cho phép chọn
        </h1>
      </div>
      <div>
        <VkxSelect
          isDisabled
          className="max-w-xs"
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Select với các mục không cho phép chọn
        </h1>
      </div>
      <div>
        <VkxSelect
          className="max-w-xs"
          disabledKeys={new Set(["1", "2"])}
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Select với mô tả và biểu tượng
        </h1>
      </div>
      <div>
        <VkxSelect
          className="max-w-xs"
          description="Hãy chọn ngôn ngữ lập trình yêu thích của bạn"
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
          startContent={<PetIcon />}
        />
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Select với validation
        </h1>
      </div>
      <div>
        <VkxSelect
          isRequired
          className="max-w-xs"
          errorMessage={
            !selectedKey ? "Vui lòng chọn một ngôn ngữ lập trình" : ""
          }
          isInvalid={!selectedKey}
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
          selectedKeys={selectedKey}
          onSelectionChange={(keys) => {
            const selected = keys as Set<string>;

            setSelectedKey(selected);
          }}
        />
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Select với chọn nhiều phần tử
        </h1>
      </div>
      <div>
        <VkxSelect
          className="max-w-xs"
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
          selectedKeys={selectedKey}
          selectionMode="multiple"
          onSelectionChange={(keys) => {
            const selected = keys as Set<string>;

            setSelectedKey(selected);
          }}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          7. Select với virtualization
        </h1>
      </div>
      <div>
        <VkxSelect
          isVirtualized
          className="max-w-xs"
          label="Danh sách 1000 mục với virtualization"
          placeholder="Chọn một mục"
          selectItems={Array.from({ length: 1000 }, (_, i) => ({
            key: i.toString(),
            children: `Item ${i + 1}`,
            description: `Mô tả cho item ${i + 1}`,
          }))}
        />
        <p className="mt-2 text-sm text-gray-500">
          Thử cuộn nhanh qua 1000 items - bạn sẽ thấy việc cuộn rất mượt mà vì
          chỉ có một số ít items được render tại một thời điểm.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          8. Multiple Select với controlled value
        </h1>
      </div>
      <div>
        <VkxSelect
          className="max-w-xs"
          description={`Các mục đã chọn: ${Array.from(selectedKey).join(", ")}`}
          label="Ngôn ngữ lập trình"
          placeholder="Chọn ngôn ngữ lập trình"
          selectItems={selectOptions}
          selectedKeys={selectedKey}
          selectionMode="multiple"
          onSelectionChange={(keys) => {
            const selected = keys as Set<string>;

            setSelectedKey(selected);
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          Multiple Select với controlled value cho phép bạn kiểm soát hoàn toàn
          trạng thái chọn từ bên ngoài component. Các giá trị được lưu dưới dạng
          Set.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          9. Select với controlled open state
        </h1>
      </div>
      <div className="flex gap-4">
        <div className="w-2/4">
          <VkxSelect
            className="max-w-xs"
            isOpen={isOpen}
            label="Ngôn ngữ lập trình"
            placeholder="Chọn ngôn ngữ lập trình"
            selectItems={selectOptions}
            onOpenChange={setIsOpen}
          />
        </div>
        <div className="w-2/4">
          <Button
            onPress={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Đóng Select" : "Mở Select"}
          </Button>
          <p className="text-sm text-gray-500">
            Trạng thái hiện tại: {isOpen ? "Đang mở" : "Đang đóng"}
          </p>
        </div>
      </div>
      <div>
        <p className="mt-2 text-sm text-gray-500">
          Bạn có thể kiểm soát trạng thái mở/đóng của select từ bên ngoài
          component bằng cách sử dụng props isOpen và onOpenChange.
        </p>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxSelect Props
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
                  selectItems
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  VkxSelectItem[]
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  required
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Danh sách các mục có thể chọn
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
                  Văn bản gợi ý
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  label
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nhãn của select
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
                  Mô tả bổ sung
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
                  selectedKeys
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Set&lt;string&gt;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Các mục đang được chọn
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  disabledKeys
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Set&lt;string&gt;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Các mục bị vô hiệu hóa
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onSelectionChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  {"(selection: Selection) => void"}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Xử lý khi lựa chọn thay đổi
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
                  Vô hiệu hóa select
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isRequired
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Bắt buộc phải chọn
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
                  Trạng thái không hợp lệ
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  selectionMode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;single&quot; | &quot;multiple&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;single&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Chế độ chọn mục
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isVirtualized
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Bật tính năng ảo hóa để tối ưu hiệu năng khi hiển thị danh
                  sách dài
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isOpen
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kiểm soát trạng thái mở/đóng của select
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onOpenChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (isOpen: boolean) {"=>"} void
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Xử lý khi trạng thái mở/đóng thay đổi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  size
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;md&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kích thước
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  color
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;default&quot; | &quot;primary&quot; |
                  &quot;secondary&quot; | &quot;success&quot; |
                  &quot;warning&quot; | &quot;danger&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;default&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Màu sắc
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  variant
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;flat&quot; | &quot;bordered&quot; | &quot;faded&quot; |
                  &quot;underlined&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;flat&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kiểu dáng
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
                  Vị trí của label
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  startContent
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung ở đầu select
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  alignContent
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;start&quot; | &quot;end&quot; | &quot;left&quot; |
                  &quot;right&quot; | &quot;center&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Căn chỉnh nội dung
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxSelectItem Props
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
                  Nội dung của mục
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
                  Mô tả của mục
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  startContent
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung ở đầu mục
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const PetIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => {
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
