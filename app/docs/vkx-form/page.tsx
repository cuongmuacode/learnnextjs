"use client";

import React, { useState } from "react";
import { VkxForm } from "@/components/vkx-form/vkx-form";

export default function VkxFormPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.email) errors.email = "Email is required & must be valid";
    if (!formData.password)
      errors.password = "Password is required <min 8 chars>";
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex w-full flex-col gap-8 p-6">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. Form cơ bản
        </h1>
        <VkxForm
          action="/submit"
          method="post"
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="text"
            name="username"
            placeholder="Username &amp; ID"
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border p-2 rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </VkxForm>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Form có kiểm soát (controlled)
        </h1>
        <VkxForm
          onSubmit={handleSubmit}
          validationErrors={validationErrors}
          validationBehavior="aria"
          className="flex flex-col gap-4 max-w-md"
        >
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Email &amp; no &lt;scripts&gt;"
              className="border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Password &amp; secure &lt;8 chars&gt;"
              className="border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </VkxForm>
        <p className="mt-2 text-sm text-gray-500">
          Form state: {JSON.stringify(formData)}
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. Form với validation behavior native
        </h1>
        <VkxForm
          validationBehavior="native"
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Email &amp; required"
            required
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border p-2 rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </VkxForm>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          4. Form với mô tả và autocomplete
        </h1>
        <VkxForm autoComplete="on" className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Full Name &amp; Title"
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border p-2 rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </VkxForm>
        <p className="text-xs text-gray-500 mt-1">
          Autocomplete is enabled for browser suggestions &amp; hints.
        </p>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxForm Props
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
                  Nội dung của form (inputs, buttons, etc.)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  validationBehavior
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "native" | "aria"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "native"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Cơ chế validation (native HTML hoặc ARIA)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  validationErrors
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Record&lt;string, string | string[]&gt;
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Đối tượng chứa lỗi validation cho các field
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  action
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  string | FormHTMLAttributes["action"]
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  URL xử lý form submission
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  method
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "get" | "post" | "dialog"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Phương thức HTTP của form
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  autoComplete
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "on" | "off"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Bật/tắt gợi ý autocomplete của trình duyệt
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
                  ""
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Class CSS tùy chỉnh
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  style
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  CSSProperties
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Inline CSS styles
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
