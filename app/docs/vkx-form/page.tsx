"use client";

import React, { useState } from "react";
import { VkxForm } from "@/components/vkx-form/vkx-form";
import { VkxInput } from "@/components/vkx-input/vkx-input";
import VkxButton from "@/components/vkx-button/vkx-button";

export default function VkxFormPage() {
  const [submitted, setSubmitted] = React.useState({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData);
    setSubmitted(data);
    console.log(data);
  };

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          onSubmit={onSubmit}
          method="post"
          className="flex flex-col gap-4 max-w-md"
        >
          <VkxInput
            isRequired
            name="userName"
            label="User name"
            errorMessage="Please enter a valid email"
            labelPlacement="outside"
            placeholder="Enter your email"
            type="text"
          />
          <VkxButton type="submit">Submit</VkxButton>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </VkxForm>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Form có kiểm soát (controlled)
        </h1>
        <VkxForm
          onSubmit={handleLoginSubmit}
          validationErrors={validationErrors}
          validationBehavior="aria"
          className="flex flex-col gap-4 max-w-md"
        >
          <div>
            <VkxInput
              type="email"
              value={formData.email}
              onValueChange={(e) => handleInputChange("email", e)}
              placeholder="Email"
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div>
            <VkxInput
              type="password"
              value={formData.password}
              onValueChange={(e) => handleInputChange("password", e)}
              placeholder="Password"
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <VkxButton type="submit" color="primary">
              Login
            </VkxButton>
            <VkxButton type="reset">Reset</VkxButton>
          </div>
        </VkxForm>
        <p className="mt-2 text-sm text-gray-500">
          Form state: {JSON.stringify(formData)}
        </p>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. Form với validation behavior aria
        </h1>
        <VkxForm
          validationBehavior="aria"
          className="flex flex-col gap-4 max-w-md"
        >
          <VkxInput
            isRequired
            type="username"
            label="Username"
            placeholder="Enter your username"
            onValueChange={(e) => handleInputChange("email", e)}
            validate={(value) => {
              if (value.length < 3) {
                return "Username must be at least 3 characters long";
              }

              return value === "admin" ? "Nice try!" : null;
            }}
          />
          <VkxButton type="submit">Submit</VkxButton>
        </VkxForm>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          4. Form với mô tả và autocomplete
        </h1>
        <VkxForm autoComplete="on" className="flex flex-col gap-4 max-w-md">
          <VkxInput
            type="text"
            placeholder="Full Name &amp; Title"
            onValueChange={(e) => handleInputChange("email", e)}
          />
          <VkxButton type="submit">Save</VkxButton>
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
