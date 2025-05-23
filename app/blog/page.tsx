"use client";

import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  getKeyValue,
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = React.useState<Article[]>([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getArticle();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium text-black dark:text-white">
          Danh sách Blog
        </h1>
        <Link
          href="/blog/create"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white 
          font-medium px-4 py-2 rounded-lg shadow"
        >
          <PlusIcon className="h-5 w-5" />
          Blog mới
        </Link>
      </div>

      <Table
        aria-label="Example table with dynamic content"
        selectionMode="single"
        onSelectionChange={(key) => {
          var selectedArray = Array.from(key);
          router.push(`/blog/${selectedArray[0]}`);
          // router.push();
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={blogs}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const columns = [
  {
    key: "title",
    label: "Tiêu đề",
  },
  {
    key: "content",
    label: "Nội dung",
  },
  {
    key: "createdByUserId",
    label: "Người tạo",
  },
];

export function getArticle(): Article[] {
  return Array.from({ length: 20 }, (_, i) => {
    const id = (i + 1).toString();
    const createdDate = new Date(2025, 0, 1 + i);
    const modifiedDate = new Date(2025, 0, 2 + i);

    return {
      id: id,
      title: `Bài viết số ${id}`,
      content: `Nội dung giả lập cho bài viết số ${id}. Đây là đoạn nội dung được tạo tự động.`,
      createdOnDate: createdDate,
      lastModifiedOnDate: modifiedDate,
      createdByUserId: `user_${(i % 5) + 1}`,
      lastModifiedByUserId: `user_${(i % 5) + 1}`,
    };
  });
}
