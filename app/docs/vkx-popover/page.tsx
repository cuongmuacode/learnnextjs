"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

export default function VkxPopoverPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
        Popover
      </h1>
      <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl">
        <b>Popover</b> là một component hiển thị nội dung nổi trên giao diện, thường dùng để hiển thị thông tin bổ sung, menu, hoặc các hành động phụ thuộc vào một trigger (nút, icon, ...). Dưới đây là các ví dụ sử dụng Popover với HeroUI.
      </p>

      {/* 1. Popover cơ bản */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        1. Popover cơ bản
      </h2>
      <Popover>
        <PopoverTrigger>
          <Button color="primary">Mở Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">Đây là nội dung của Popover!</div>
        </PopoverContent>
      </Popover>

      {/* 2. Popover với nội dung phức tạp */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        2. Popover với nội dung phức tạp
      </h2>
      <Popover>
        <PopoverTrigger>
          <Button color="secondary">Thông tin chi tiết</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4 w-64">
            <h3 className="font-semibold mb-2">Thông tin sản phẩm</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>Giá: <b>1.000.000đ</b></li>
              <li>Tình trạng: <span className="text-green-600">Còn hàng</span></li>
              <li>Bảo hành: 12 tháng</li>
            </ul>
            <Button className="mt-4 w-full" color="success">Mua ngay</Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* 3. Popover có thể đóng bằng click ngoài */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        3. Popover có thể đóng bằng click ra ngoài
      </h2>
      <Popover shouldCloseOnBlur>
        <PopoverTrigger>
          <Button color="warning">Click ngoài để đóng</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">Click ra ngoài vùng popover để đóng.</div>
        </PopoverContent>
      </Popover>

      {/* 4. Popover với vị trí tuỳ chỉnh */}
      <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-2">
        4. Popover với vị trí tuỳ chỉnh
      </h2>
      <div className="flex gap-4 flex-wrap">
        <Popover placement="top">
          <PopoverTrigger>
            <Button>Top</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Popover phía trên</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>Bottom</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Popover phía dưới</div>
          </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverTrigger>
            <Button>Left</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Popover bên trái</div>
          </PopoverContent>
        </Popover>
        <Popover placement="right">
          <PopoverTrigger>
            <Button>Right</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Popover bên phải</div>
          </PopoverContent>
        </Popover>
      </div>

      {/* 5. Prop Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Thuộc tính</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Kiểu dữ liệu</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Mặc định</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Mô tả</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr><td className="border px-4 py-2">children</td><td className="border px-4 py-2">ReactNode[]</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Các thành phần con: <code>PopoverTrigger</code> và <code>PopoverContent</code></td></tr>
              <tr><td className="border px-4 py-2">placement</td><td className="border px-4 py-2">"top" | "bottom" | "left" | "right" | ...</td><td className="border px-4 py-2">"top"</td><td className="border px-4 py-2">Vị trí hiển thị popover</td></tr>
              <tr><td className="border px-4 py-2">isOpen</td><td className="border px-4 py-2">boolean</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Kiểm soát trạng thái mở/đóng</td></tr>
              <tr><td className="border px-4 py-2">defaultOpen</td><td className="border px-4 py-2">boolean</td><td className="border px-4 py-2">false</td><td className="border px-4 py-2">Mở mặc định khi render</td></tr>
              <tr><td className="border px-4 py-2">shouldCloseOnBlur</td><td className="border px-4 py-2">boolean</td><td className="border px-4 py-2">true</td><td className="border px-4 py-2">Tự động đóng khi click ra ngoài</td></tr>
              <tr><td className="border px-4 py-2">onOpenChange</td><td className="border px-4 py-2">(isOpen: boolean) =&gt; void</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Callback khi trạng thái mở/đóng thay đổi</td></tr>
              <tr><td className="border px-4 py-2">onClose</td><td className="border px-4 py-2">() =&gt; void</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Callback khi đóng popover</td></tr>
              <tr><td className="border px-4 py-2">classNames</td><td className="border px-4 py-2">object</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Tuỳ chỉnh class cho các phần tử</td></tr>
              <tr><td className="border px-4 py-2">motionProps</td><td className="border px-4 py-2">object</td><td className="border px-4 py-2">-</td><td className="border px-4 py-2">Tuỳ chỉnh animation (framer-motion)</td></tr>
              <tr><td className="border px-4 py-2">portalContainer</td><td className="border px-4 py-2">Element</td><td className="border px-4 py-2">document.body</td><td className="border px-4 py-2">Container cho portal</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
