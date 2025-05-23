"use client";

import React, { JSX } from "react";

import { VkxInput } from "@/components/vkx-input";
import VkxButton from "@/components/vkx-button/vkx-button";

export default function VkxInputPage() {
  const [value, setValue] = React.useState("");
  const [numberValue, setNumberValue] = React.useState("");

  const [isVisible, setIsVisible] = React.useState(false);
  const [files, setFiles] = React.useState<FileList>();
  
  const toggleVisibility = () => setIsVisible(!isVisible);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue("1234567");
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Input cơ bản
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Input cơ bản với các thuộc tính label và type. Bạn có thể tùy chỉnh
            placeholder để hiển thị gợi ý cho người dùng. Các kiểu input phổ
            biến bao gồm text, email, password, number, etc.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Thích hợp cho các trường hợp nhập liệu đơn giản, không yêu cầu xác
            thực phức tạp.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput label="Email" type="email" />
        <VkxInput label="Email" placeholder="Enter your email" type="email" />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Input bị vô hiệu hóa và chỉ đọc
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Input có thể được cấu hình để vô hiệu hóa hoàn toàn (disabled) hoặc
            chỉ cho phép đọc (readonly). Sử dụng prop isDisabled khi bạn muốn
            ngăn người dùng tương tác với input, và readOnly khi bạn muốn hiển
            thị thông tin mà không cho phép chỉnh sửa.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Hữu ích cho các trường thông tin tĩnh hoặc khi cần tạm thời khoá khả
            năng nhập liệu.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          isDisabled
          defaultValue="example@email.com"
          description="Input này đã bị vô hiệu hóa"
          label="Email (Disabled)"
          type="email"
        />
        <VkxInput
          readOnly
          defaultValue="readonly@email.com"
          description="Input này chỉ có thể đọc"
          label="Email (Readonly)"
          type="email"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Vị trí của label và mô tả
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Label có thể được đặt ở các vị trí khác nhau so với input để phù hợp
            với thiết kế của ứng dụng. Thuộc tính description cho phép thêm
            thông tin mô tả hoặc hướng dẫn bổ sung.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Sử dụng các vị trí label khác nhau để tối ưu hóa trải nghiệm người
            dùng và bố cục form.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          description="Label ở trên input"
          label="Label Outside"
          labelPlacement="outside"
          type="email"
        />
        <VkxInput
          description="Label ở bên trái input"
          label="Label Outside Left"
          labelPlacement="outside-left"
          type="email"
        />
        <VkxInput
          description="Label ở trong input"
          label="Label Inside"
          labelPlacement="inside"
          type="email"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Xác thực và hiển thị lỗi
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Input có thể hiển thị trạng thái lỗi và thông báo lỗi khi dữ liệu
            không hợp lệ. Sử dụng isInvalid và errorMessage để thông báo lỗi cho
            người dùng.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Quan trọng cho việc xác thực form và cung cấp phản hồi ngay lập tức
            cho người dùng.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          errorMessage="Vui lòng nhập địa chỉ email hợp lệ"
          isInvalid={true}
          label="Email"
          type="email"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Theo dõi thay đổi giá trị
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng value và onValueChange để theo dõi và xử lý các thay đổi giá
            trị của input. Prop onClear cho phép xử lý sự kiện khi người dùng
            xóa giá trị input.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Hữu ích khi cần đồng bộ giá trị input với state của ứng dụng hoặc
            thực hiện các tác vụ khi giá trị thay đổi.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          description="Giá trị sẽ được cập nhật sau 2 giây"
          label="Nhập giá trị"
          type="text"
          value={value}
          onClear={() => setValue("")}
          onValueChange={setValue}
        />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">
        Giá trị hiện tại: {value}
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Input mật khẩu với tùy chọn hiển thị
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Input type password với khả năng chuyển đổi giữa ẩn và hiện mật
            khẩu. Sử dụng endContent để thêm nút toggle và kiểm soát việc hiển
            thị mật khẩu.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Cải thiện trải nghiệm người dùng bằng cách cho phép kiểm tra mật
            khẩu đã nhập.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          description="Click vào icon bên phải để hiện/ẩn mật khẩu"
          endContent={
            <VkxButton
              aria-label="toggle password visibility"
              className="focus:outline-none"
              isIconOnly={true}
              type="button"
              variant="light"
              onPress={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </VkxButton>
          }
          label="Password"
          placeholder="Nhập mật khẩu của bạn"
          type={isVisible ? "text" : "password"}
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          7. Tải lên một hoặc nhiều file
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Kiểm tra xem đuôi file có
        </p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          isRequired
          multiple
          label="Tải lên file của bạn"
          labelPlacement="outside"
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setFiles(e.target.files);
            }
          }}
        />
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        {files
          ? Array.from(files).map((item, index) => (
              <div
                key={`${item.name} + ${index}`}
                className="mt-3 p-2 border-b-2"
              >
                <span>
                  Tên file: <strong>{files?.item(0)?.name}</strong>
                </span>
                <br />
                <span>
                  Kích cỡ:<strong>{files?.item(0)?.size}</strong>{" "}
                </span>
                <br />
                <span>
                  Loại: <strong>{files?.item(0)?.type}</strong>
                </span>
                <br />
                <strong>..v.v.</strong>
              </div>
            ))
          : ""}
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          8. Number input
        </h1>
        <p className="text-gray-600 dark:text-gray-400" />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxInput
          label="Nhập số tiền"
          max={100000}
          min={0.1}
          step={1}
          type="number"
          onValueChange={(value) => {
            setNumberValue(value);
          }}
        />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">
        Giá trị hiện tại: {numberValue}
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxInput Props
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
                  Nhãn hiển thị cho trường input
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  type
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  &quot;text&quot;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kiểu input (text, email, password, file, tel, search, url)
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
                  Giá trị của input
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
                  Giá trị mặc định ban đầu của input
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
                  Văn bản gợi ý hiển thị khi input trống
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
                  Vị trí của nhãn so với input
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
                  Văn bản mô tả thêm cho input
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
                  Thông báo lỗi hiển thị khi input không hợp lệ
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
                  Xác định trạng thái không hợp lệ của input
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
                  Vô hiệu hóa input
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
                  Cho phép chỉ đọc, không thể chỉnh sửa
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onValueChange
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  function
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm được gọi khi giá trị input thay đổi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onClear
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  function
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm được gọi khi người dùng xóa giá trị input
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
                  Nội dung hiển thị ở đầu input
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  endContent
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Nội dung hiển thị ở cuối input
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  multiple
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Thuộc tính multiple cho phép người dùng chọn nhiều file cùng
                  một lúc khi sử dụng input file.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  accept
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Ví dụ: video/mp4
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  MIME
                  https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
                  Thuộc tính accept chỉ định loại file mà input file sẽ chấp
                  nhận, giúp giới hạn các file hiển thị trong giao diện chọn
                  file của trình duyệt.
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

const EyeSlashFilledIcon = (
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
        d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
        fill="currentColor"
      />
      <path
        d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
        fill="currentColor"
      />
      <path
        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
        fill="currentColor"
      />
      <path
        d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
        fill="currentColor"
      />
      <path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </svg>
  );
};
const EyeFilledIcon = (
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
        d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
        fill="currentColor"
      />
      <path
        d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
        fill="currentColor"
      />
    </svg>
  );
};
