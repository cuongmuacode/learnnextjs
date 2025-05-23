"use client";

import { VkxFileInput } from "@/components/vkx-file-input/vkx-file-input";
import { VkxInput } from "@/components/vkx-input";
import React from "react";

export default function VkxFileInputPage() {
  const [files, setFiles] = React.useState<FileList>();

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Tải lên một hoặc nhiều file
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Kiểm tra xem đuôi file có
        </p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxFileInput
          isRequired
          multiple
          label="Tải lên file của bạn"
          labelPlacement="outside"
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
                className="mt-3 p-2 border-b-1"
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
    </div>
  );
}
