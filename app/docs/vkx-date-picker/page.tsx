"use client";
import React from "react";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import { today, parseDate, DateValue } from "@internationalized/date";

export default function VkxDatePickerPage() {
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(null);
  const [error, setError] = React.useState("");
  const minValue = parseDate("2020-01-01");
  const maxValue = parseDate("2030-12-31");
  const placeholderDate = today("UTC");

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Date Picker cơ bản
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày sinh"
          placeholder={placeholderDate}
          minValue={minValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Date Picker disabled
        </h1>
      </div>
      <div>
        <VkxDatePicker
          isDisabled
          className="max-w-xs"
          label="Chọn ngày sinh"
          placeholder={placeholderDate}
          minValue={minValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Date Picker có error
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày sinh"
          placeholder={placeholderDate}
          minValue={minValue}
          isInvalid={!!error}
          errorMessage={error}
          value={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            if (!date) setError("Vui lòng chọn ngày sinh");
            else setError("");
          }}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Date Picker có description
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày sinh"
          description="Hãy chọn ngày sinh của bạn để nhận ưu đãi sinh nhật!"
          placeholder={placeholderDate}
          minValue={minValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Date Picker với min/max value
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày trong khoảng cho phép"
          placeholder={placeholderDate}
          minValue={minValue}
          maxValue={maxValue}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Date Picker controlled
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày (controlled)"
          value={selectedDate}
          onChange={setSelectedDate}
          minValue={minValue}
        />
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Ngày đã chọn: {selectedDate ? selectedDate.toString() : "Chưa chọn"}
        </div>
      </div>
    </div>
  );
}