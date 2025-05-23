"use client";
import { VkxNumberInput } from "@/components/vkx-number-input/vkx-number-input";

export default function VkxNumberInputPage() {
  return (
    <div>
      <h1 className="text-5xl">Number Input</h1>

      <div className="mt-7">
        <h2 className="text-2xl">1. Cơ bản</h2>
        <VkxNumberInput
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl">2. Vô hiệu hóa</h2>
        <VkxNumberInput
          isDisabled
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl">3. Giá trị mặc định và chỉ đọc</h2>
        <VkxNumberInput
          isDisabled
          defaultValue={10.1}
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl">4. Bắt buộc nhập</h2>
        <p>
          Nếu bạn truyền thuộc tính isRequired vào ô nhập (input), sẽ có dấu hoa
          thị màu đỏ (biểu thị nguy hiểm) xuất hiện ở cuối nhãn (label) và ô
          nhập sẽ trở thành bắt buộc phải điền.
        </p>
        <VkxNumberInput
          isRequired
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl">5. Nút xóa giá trị</h2>
        <p>
          Nếu bạn truyền thuộc tính isClearable vào ô nhập (input), sẽ có một
          nút xóa xuất hiện ở cuối ô nhập. Nút này sẽ hiển thị khi ô nhập có giá
          trị.
        </p>
        <VkxNumberInput
          defaultValue={10.1}
          isClearable
          onClear={() => {
            console.log("cuong");
            return;
          }}
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <h2 className="text-2xl">6. Ẩn nút Stepper</h2>
        <p>
          Bạn có thể ẩn các nút bước (stepper buttons) bằng cách truyền thuộc
          tính hideStepper
        </p>
        <VkxNumberInput
          defaultValue={10.1}
          isClearable
          hideStepper
          onClear={() => {
            console.log("cuong");
            return;
          }}
          className="mt-7 max-w-xs"
          placeholder="Nhập số của bạn"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <div className="">
          <h2 className="text-2xl">7. Hiển thị label và mô tả</h2>
          <p>
            Bạn có thể thêm nhãn cho ô nhập bằng cách truyền thuộc tính label.
            <br />
            Bạn có thể thêm mô tả cho ô nhập bằng cách truyền thuộc tính
            description.
          </p>
        </div>
        <VkxNumberInput
          defaultValue={10.1}
          label="Giá tiền"
          description="Đây là ô để bạn nhập số tiền mà bạn muốn trả cho dịch vụ này"
          className="mt-7 max-w-xs"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <div className="">
          <h2 className="text-2xl">8. Giới Hạn Giá Trị Tối Đa và Tối thiểu</h2>
          <p>
            Bạn có thể đặt giá trị tối đa cho ô nhập bằng cách truyền thuộc tính
            maxValue. <br />
            Bạn có thể đặt giá trị tối thiểu cho ô nhập bằng cách truyền thuộc
            tính minValue.
          </p>
        </div>
        <div className="flex gap-5">
          <VkxNumberInput
            label="Giá trị tôi thiểu"
            description="Giá trị phải lớn hơn hoặc bằng 100."
            minValue={100}
            className="mt-7 max-w-xs"
          ></VkxNumberInput>
          <VkxNumberInput
            label="Giá trị tối đa"
            description="Giá trị phải nhỏ hơn hoặc bằng 100."
            maxValue={100}
            className="mt-7 max-w-xs"
          ></VkxNumberInput>
        </div>
      </div>

      <div className="mt-7">
        <div className="">
          <h2 className="text-2xl">9. Vô Hiệu Hóa Cuộn Chuột</h2>
          <p>
            Mặc định, bạn có thể tăng hoặc giảm giá trị bằng cách cuộn chuột.
            Bạn có thể vô hiệu hóa việc thay đổi giá trị bằng cuộn chuột trong
            NumberInput bằng cách truyền thuộc tính isWheelDisabled.{" "}
          </p>
        </div>
        <VkxNumberInput
          isWheelDisabled
          defaultValue={10.1}
          label="Giá tiền"
          description="Đây là ô để bạn nhập số tiền mà bạn muốn trả cho dịch vụ này"
          className="mt-7 max-w-xs"
        ></VkxNumberInput>
      </div>

      <div className="mt-7">
        <div className="">
          <h2 className="text-2xl">10. Với Tùy Chọn Định Dạng</h2>
          <p>
            Bạn có thể định dạng giá trị của ô nhập bằng cách truyền thuộc tính
            formatOptions.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <VkxNumberInput
              className="max-w-xs"
              defaultValue={6}
              formatOptions={{
                style: "currency",
                currency: "USD",
              }}
              label="With Currency"
            />
            <VkxNumberInput
              className="max-w-xs"
              defaultValue={6}
              formatOptions={{
                signDisplay: "exceptZero",
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              }}
              label="With Sign"
            />
            <VkxNumberInput
              className="max-w-xs"
              defaultValue={6}
              formatOptions={{
                style: "percent",
              }}
              label="With Percent"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <VkxNumberInput
              className="max-w-xs"
              defaultValue={6}
              formatOptions={{
                style: "currency",
                currency: "EUR",
                currencyDisplay: "code",
                currencySign: "accounting",
              }}
              label="With Currency Vaule"
            />
            <VkxNumberInput
              className="max-w-xs"
              defaultValue={6}
              formatOptions={{
                style: "unit",
                unit: "inch",
                unitDisplay: "long",
              }}
              label="With Unit"
            />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <div className="">
          <h2 className="text-2xl">11. Điều khiển và có thông báo lỗi</h2>
          <p>
            Bạn có thể sử dụng các thuộc tính value và onValueChange để điều
            khiển giá trị của ô nhập.
            <br />
            Bạn có thể kết hợp thuộc tính isInvalid và errorMessage để hiển thị
            lỗi cho ô nhập. errorMessage chỉ hiển thị khi isInvalid được đặt là
            true.
          </p>
        </div>
        <VkxNumberInput
          defaultValue={10.1}
          errorMessage="Please enter a valid number"
          isInvalid={true}
          label="Giá tiền"
          description="Đây là ô để bạn nhập số tiền mà bạn muốn trả cho dịch vụ này"
          className="mt-7 max-w-xs"
        ></VkxNumberInput>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxNumberInput Props
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
                <td className="border px-4 py-2">className</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Class CSS tuỳ chỉnh</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">defaultValue</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị mặc định</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị điều khiển (controlled)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">placeholder</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Văn bản gợi ý</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nhãn hiển thị phía trên ô nhập</td>
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
                <td className="border px-4 py-2">Thông báo lỗi hiển thị khi isInvalid=true</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa ô nhập</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isInvalid</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Trạng thái không hợp lệ (hiển thị errorMessage)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Bắt buộc nhập</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">min</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị nhỏ nhất cho phép</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">max</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị lớn nhất cho phép</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">step</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Bước nhảy khi tăng/giảm giá trị</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">name</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Tên trường (dùng cho form)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">readOnly</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Chỉ đọc, không cho chỉnh sửa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onValueChange</td>
                <td className="border px-4 py-2">(value: number) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isClearable</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Hiển thị nút xóa giá trị</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onClear</td>
                <td className="border px-4 py-2">() =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi nhấn nút xóa</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">hideStepper</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Ẩn nút tăng/giảm (stepper)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isWheelDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa thay đổi giá trị bằng cuộn chuột</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">formatOptions</td>
                <td className="border px-4 py-2">object</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Tùy chọn định dạng hiển thị số (Intl.NumberFormat options)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
