"use client";

import { VkxSearchInput } from "@/components/vkx-search-input/vkx-search-input";
import React from "react";

export default function VkxSearchInputPage() {
  return (
    <div>
      <h1 className="mb-8 text-5xl">Search Input</h1>
      <div>
        <h1 className="mb-4">1. Cơ bản</h1>

        <VkxSearchInput
          className="max-w-xs"
          label="Tìm kiếm"
          placeholder="Nhập từ khoá"
        />
      </div>
    </div>
  );
}
