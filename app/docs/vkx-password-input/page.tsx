"use client";
import { VkxPasswordInput } from "@/components/vkx-password-input/vkx-password-input";

export default function VkxPasswordInputPage() {
  return (
    <div>
      <h1 className="text-6xl mb-7">Password Input</h1>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Input mật khẩu với tùy chọn hiển thị
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
        <VkxPasswordInput
          className="max-w-xs"
          description="Click vào icon bên phải để hiện/ẩn mật khẩu"
          label="Password"
          placeholder="Nhập mật khẩu của bạn"
        />
      </div>

      <div className="mt-4">
        <div className="mb-3">
          <h1 className="text-xl font-medium text-black dark:text-white">
            2. Input mật khẩu với tùy chọn hiển thị
          </h1>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <VkxPasswordInput
            className="max-w-xs"
            isRequired
            description="Click vào icon bên phải để hiện/ẩn mật khẩu"
            label="Password"
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>
      </div>
    </div>
  );
}
