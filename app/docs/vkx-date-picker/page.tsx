"use client";
import React from "react";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import {
  today,
  parseDate,
  parseDateTime,
  DateValue,
} from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

export default function VkxDatePickerPage() {
  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(
    null
  );
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
          2. Date Picker readonly
        </h1>
      </div>
      <div>
        <VkxDatePicker
          isReadOnly
          className="max-w-xs"
          label="Chọn ngày sinh (readonly)"
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

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          7. Date Picker với Month và Year Pickers
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày (có Month/Year pickers)"
          placeholder={placeholderDate}
          minValue={minValue}
          showMonthAndYearPickers={true}
        />
        <p className="mt-2 text-sm text-gray-500">
          Bạn có thể chọn nhanh tháng và năm trong popover của DatePicker này.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          8. Date Picker với preset ngày (preset value)
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày với preset"
          value={parseDateTime("2025-05-13T00:00")}
          placeholder={placeholderDate}
          minValue={minValue}
          maxValue={maxValue}
          granularity="minute"
        />
        <p className="mt-2 text-sm text-gray-500">
          Sử dụng <code>parseDateTime("2025-05-13T00:00")</code> để đặt giá trị
          ngày mặc định/preset.
          <br />
          Bạn có thể dùng các hàm của <code>@internationalized/date</code> để
          parse nhiều định dạng ngày khác nhau.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          9. Date Picker với error message động (dynamic error message)
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Birth date"
          placeholder={placeholderDate}
          minValue={minValue}
          isInvalid={!!error}
          errorMessage={error || "Please enter a valid date."}
          value={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            if (!date) setError("Please enter a valid date.");
            else setError("");
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          You can combine <code>isInvalid</code> and <code>errorMessage</code>{" "}
          to show an invalid input.
          <br />
          You can also pass an error message as a function for dynamic error
          handling.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          10. Date Picker với errorMessage là function (dynamic by
          ValidationResult)
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Birth date (function errorMessage)"
          placeholder={placeholderDate}
          minValue={minValue}
          errorMessage={(validationResult) => {
            if (validationResult.isInvalid) {
              if (validationResult.validationDetails?.rangeUnderflow)
                return `Date must be after ${minValue.toString()}`;
              if (validationResult.validationDetails?.rangeOverflow)
                return `Date must be before ${maxValue.toString()}`;
              return "Please enter a valid date.";
            }
            return "";
          }}
          value={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
            if (!date) setError("Please enter a valid date.");
            else setError("");
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          You can also pass <code>errorMessage</code> as a function to handle
          dynamic error messages based on the <code>ValidationResult</code>.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          11. Date Picker với ngày không khả dụng (Unavailable Dates)
        </h1>
      </div>
      <div>
        <VkxDatePicker
          className="max-w-xs"
          label="Chọn ngày (một số ngày không khả dụng)"
          placeholder={placeholderDate}
          minValue={minValue}
          maxValue={maxValue}
          isDateUnavailable={(date) => {
            // Đánh dấu ngày 2025-05-20 và 2025-05-25 là không khả dụng
            const unavailable = [
              parseDate("2025-05-20"),
              parseDate("2025-05-25"),
            ];
            return unavailable.some((d) => d.toString() === date.toString());
          }}
        />
        <p className="mt-2 text-sm text-gray-500">
          Sử dụng prop <code>isDateUnavailable</code> để đánh dấu các ngày không
          khả dụng.
          <br />
          Các ngày này sẽ bị gạch chéo trong lịch và không thể chọn được.
          <br />
          Nếu người dùng nhập một ngày không khả dụng, trường sẽ hiển thị trạng
          thái không hợp lệ.
          <br />
          Bạn có thể sử dụng các hàm của <code>@internationalized/date</code> để
          parse ngày cần đánh dấu.
          <br />
          <b>Ví dụ:</b> Không thể chọn ngày <code>2025-05-20</code> và{" "}
          <code>2025-05-25</code>.
        </p>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxDatePicker Props
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
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nhãn hiển thị cho DatePicker.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  placeholder
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  DateValue | null
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
                  value
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  DateValue | null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị ngày được chọn (controlled).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  defaultValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  DateValue | null
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị ngày mặc định khi khởi tạo (uncontrolled).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (date: DateValue | null) =&gt; void
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Callback khi giá trị ngày thay đổi.
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
                  Vô hiệu hóa DatePicker (không cho chọn ngày).
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
                  Trạng thái không hợp lệ (hiển thị lỗi).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  errorMessage
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode | (value: ValidationResult) =&gt; ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Thông báo lỗi hiển thị khi không hợp lệ. Có thể là chuỗi,
                  ReactNode hoặc function trả về ReactNode dựa trên
                  ValidationResult.
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
                  Mô tả bổ sung hiển thị dưới trường chọn ngày.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  minValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  DateValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị ngày nhỏ nhất có thể chọn.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  maxValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  DateValue
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Giá trị ngày lớn nhất có thể chọn.
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
                  Class CSS tuỳ chỉnh cho DatePicker.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  showMonthAndYearPickers
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hiển thị bộ chọn tháng/năm trong popover.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isReadOnly
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Chỉ cho phép xem, không cho chỉnh sửa giá trị.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  visibleMonths
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  number
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Số tháng hiển thị cùng lúc trong popover.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  granularity
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "day" | "hour" | "minute" | "second"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "day"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Độ chi tiết của trường chọn ngày (chọn thêm giờ, phút, giây
                  nếu cần).
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isDateUnavailable
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  (date: DateValue) =&gt; boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm kiểm tra ngày không khả dụng. Trả về <code>true</code> nếu
                  ngày không thể chọn (sẽ bị gạch chéo trong lịch và không thể
                  chọn được).
                  <br />
                  Nếu người dùng nhập ngày không khả dụng, trường sẽ hiển thị
                  trạng thái không hợp lệ.
                  <br />
                  Có thể sử dụng các hàm <code>parseDate</code>,{" "}
                  <code>parseZonedDateTime</code> từ{" "}
                  <code>@internationalized/date</code> để xác định ngày không
                  khả dụng.
                  <br />
                  <b>Lưu ý:</b> Các ký tự đặc biệt như <code>&lt;</code>,{" "}
                  <code>&gt;</code>, <code>&amp;</code>, <code>&quot;</code>,{" "}
                  <code>&apos;</code> nên sử dụng dạng HTML entity để hiển thị
                  đúng trong bảng.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
