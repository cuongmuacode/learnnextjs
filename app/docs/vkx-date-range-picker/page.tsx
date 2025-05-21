"use client";
import type { RangeValue } from "@heroui/react";

import React from "react";
import {
  today,
  parseDate,
  CalendarDate,
  CalendarDateTime,
  ZonedDateTime,
} from "@internationalized/date";

import { VkxDateRangePicker } from "@/components/vkx-date-range-picker/vkx-date-range-picker";

export default function VkxDateRangePickerPage() {
  const [selectedRange, setSelectedRange] = React.useState<RangeValue<
    CalendarDate | CalendarDateTime | ZonedDateTime
  > | null>(null);
  const [error, setError] = React.useState("");
  const minValue = parseDate("2020-01-01");
  const maxValue = parseDate("2030-12-31");
  const placeholderValue = today("UTC");

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Date Range Picker cơ bản
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          className="max-w-xs"
          label="Chọn khoảng ngày"
          maxValue={maxValue}
          minValue={minValue}
          placeholderValue={placeholderValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Date Range Picker disabled
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          isDisabled
          className="max-w-xs"
          label="Chọn khoảng ngày"
          maxValue={maxValue}
          minValue={minValue}
          placeholderValue={placeholderValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Date Range Picker readonly
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          isReadOnly
          className="max-w-xs"
          label="Chọn khoảng ngày (readonly)"
          maxValue={maxValue}
          minValue={minValue}
          placeholderValue={placeholderValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Date Range Picker có error
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          className="max-w-xs"
          errorMessage={error}
          isInvalid={!!error}
          label="Chọn khoảng ngày"
          maxValue={maxValue}
          minValue={minValue}
          placeholderValue={placeholderValue}
          value={selectedRange}
          onChange={(range) => {
            setSelectedRange(range);
            if (!range) setError("Vui lòng chọn khoảng ngày");
            else setError("");
          }}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Date Range Picker có description
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          className="max-w-xs"
          description="Hãy chọn khoảng ngày để lọc dữ liệu!"
          label="Chọn khoảng ngày"
          maxValue={maxValue}
          minValue={minValue}
          placeholderValue={placeholderValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Date Range Picker controlled
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          className="max-w-xs"
          label="Chọn khoảng ngày (controlled)"
          maxValue={maxValue}
          minValue={minValue}
          value={selectedRange}
          onChange={setSelectedRange}
        />
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Khoảng đã chọn:{" "}
          {selectedRange
            ? `${selectedRange.start?.toString()} - ${selectedRange.end?.toString()}`
            : "Chưa chọn"}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          7. Date Range Picker với preset value
        </h1>
      </div>
      <div>
        <VkxDateRangePicker
          className="max-w-xs"
          label="Chọn khoảng ngày với preset"
          maxValue={maxValue}
          minValue={minValue}
          value={{
            start: parseDate("2025-05-10"),
            end: parseDate("2025-05-20"),
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          Sử dụng{" "}
          <code>{`{ start: parseDate("2025-05-10"), end: parseDate("2025-05-20") }`}</code>{" "}
          để đặt giá trị mặc định/preset.
        </p>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxDateRangePicker Props
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
                  label
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nhãn hiển thị cho DateRangePicker.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  value
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  RangeValue&lt;CalendarDate | CalendarDateTime |
                  ZonedDateTime&gt; | undefined | null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Khoảng ngày được chọn (controlled).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  minValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  CalendarDate | CalendarDateTime | ZonedDateTime | undefined |
                  null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Ngày nhỏ nhất có thể chọn.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  maxValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  CalendarDate | CalendarDateTime | ZonedDateTime | undefined |
                  null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Ngày lớn nhất có thể chọn.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  placeholderValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ZonedDateTime | CalendarDate | CalendarDateTime | undefined |
                  null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị placeholder hiển thị khi chưa chọn ngày.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  description
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Mô tả bổ sung hiển thị dưới trường chọn ngày.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  errorMessage
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode | (v: ValidationResult) =&gt; ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Thông báo lỗi hiển thị khi không hợp lệ.
                </td>
              </tr>
              {/* ...add more prop rows as needed... */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
