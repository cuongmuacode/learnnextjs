"use client";
import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Table,
  Spinner,
  Pagination,
} from "@heroui/react";
import React from "react";
import { useAsyncList } from "@react-stately/data";
export interface Person {
  key: string;
  name: string;
  role: string;
  status: string;
}

export default function VkxTablePage() {
  const rows = [
    { key: "1", name: "Tony Reichert", role: "CEO", status: "Active" },
    { key: "2", name: "Zoey Lang", role: "Technical Lead", status: "Paused" },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
    {
      key: "5",
      name: "Emily Collins",
      role: "Marketing Manager",
      status: "Active",
    },
    {
      key: "6",
      name: "Brian Kim",
      role: "Product Manager",
      status: "Active",
    },
    {
      key: "7",
      name: "Laura Thompson",
      role: "UX Designer",
      status: "Active",
    },
    {
      key: "8",
      name: "Michael Stevens",
      role: "Data Analyst",
      status: "Paused",
    },
    {
      key: "9",
      name: "Sophia Nguyen",
      role: "Quality Assurance",
      status: "Active",
    },
    {
      key: "10",
      name: "James Wilson",
      role: "Front-end Developer",
      status: "Vacation",
    },
    {
      key: "11",
      name: "Ava Johnson",
      role: "Back-end Developer",
      status: "Active",
    },
    {
      key: "12",
      name: "Isabella Smith",
      role: "Graphic Designer",
      status: "Active",
    },
    {
      key: "13",
      name: "Oliver Brown",
      role: "Content Writer",
      status: "Paused",
    },
    {
      key: "14",
      name: "Lucas Jones",
      role: "Project Manager",
      status: "Active",
    },
    {
      key: "15",
      name: "Grace Davis",
      role: "HR Manager",
      status: "Active",
    },
    {
      key: "16",
      name: "Elijah Garcia",
      role: "Network Administrator",
      status: "Active",
    },
    {
      key: "17",
      name: "Emma Martinez",
      role: "Accountant",
      status: "Vacation",
    },
    {
      key: "18",
      name: "Benjamin Lee",
      role: "Operations Manager",
      status: "Active",
    },
    {
      key: "19",
      name: "Mia Hernandez",
      role: "Sales Manager",
      status: "Paused",
    },
    {
      key: "20",
      name: "Daniel Lewis",
      role: "DevOps Engineer",
      status: "Active",
    },
    {
      key: "21",
      name: "Amelia Clark",
      role: "Social Media Specialist",
      status: "Active",
    },
    {
      key: "22",
      name: "Jackson Walker",
      role: "Customer Support",
      status: "Active",
    },
    {
      key: "23",
      name: "Henry Hall",
      role: "Security Analyst",
      status: "Active",
    },
    {
      key: "24",
      name: "Charlotte Young",
      role: "PR Specialist",
      status: "Paused",
    },
    {
      key: "25",
      name: "Liam King",
      role: "Mobile App Developer",
      status: "Active",
    },
  ];

  const columns = [
    { key: "name", label: "NAME" },
    { key: "role", label: "ROLE" },
    { key: "status", label: "STATUS" },
  ];
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(rows.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  const [selectedKeys, setSelectedKeys] = React.useState(["1"]);

  let list = useAsyncList<Person, string>({
    async load({ signal }) {
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      let json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column as keyof Person];
          let second = b[sortDescriptor.column as keyof Person];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <div className="flex flex-col gap-16">
      <section>
        <h1 className="text-3xl font-bold mb-2">VkxTable</h1>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Ví dụ cơ bản</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Bảng tĩnh với dữ liệu cứng, sử dụng các subcomponent TableHeader,
          TableBody, TableRow, TableCell.
        </p>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          2. Bảng với dữ liệu động
        </h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Sử dụng props <code>columns</code> và <code>items</code> để render
          bảng động từ mảng dữ liệu.
        </p>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Bảng trống</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Khi không có dữ liệu, bạn có thể truyền <code>emptyContent</code> cho{" "}
          <code>TableBody</code> để hiển thị thông báo.
        </p>
        <Table aria-label="Example empty table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Ẩn header</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Sử dụng prop <code>hideHeader</code> để ẩn phần header của bảng.
        </p>
        <Table hideHeader aria-label="Example static collection table">
          <TableHeader>
            <TableColumn> </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn> </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Chọn một dòng</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Bạn có thể làm cho các dòng trong bảng có thể được chọn. Để làm điều
          này, bạn có thể sử dụng thuộc tính selectionMode. Sử dụng
          defaultSelectedKeys để thiết lập sẵn các dòng được chọn mặc định.
        </p>
        <Table
          aria-label="Example static collection table"
          defaultSelectedKeys={["2"]}
          selectionMode="single"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Cho phép chọn nhiều dòng
        </h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Bạn có thể làm cho các dòng trong bảng có thể được chọn. Để làm điều
          này, bạn có thể sử dụng thuộc tính selectionMode. Sử dụng
          defaultSelectedKeys để thiết lập sẵn các dòng được chọn mặc định.
        </p>

        <Table
          aria-label="Example static collection table"
          selectionMode="multiple"
          defaultSelectedKeys={["2", "3"]}
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. Các hàng bị vô hiệu hóa
        </h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Bạn có thể vô hiệu hóa các hàng bằng cách sử dụng thuộc tính
          disabledKeys. Điều này sẽ ngăn không cho các hàng đó được chọn
        </p>

        <Table
          aria-label="Controlled table example with dynamic content"
          disabledKeys={["3", "4"]}
          selectedKeys={selectedKeys}
          selectionMode="multiple"
          onSelectionChange={(key) => {
            var array = Array.from(key);
            setSelectedKeys(array.map((x) => x.toString()));
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Sắp xếp các hàng</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          Bảng hỗ trợ sắp xếp dữ liệu khi tiêu đề của cột được nhấn. Để chỉ định
          rằng một cột có thể sắp xếp, hãy cung cấp thuộc tính allowsSorting cho
          cột đó. Table chấp nhận một thuộc tính sortDescriptor, xác định khóa
          của cột hiện tại được sắp xếp và hướng sắp xếp (tăng dần/giảm dần).
          Khi người dùng nhấn vào tiêu đề của một cột có thể sắp xếp, khóa của
          cột và hướng sắp xếp sẽ được truyền vào callback onSortChange, cho
          phép bạn cập nhật lại sortDescriptor một cách phù hợp.
          <br />
          <strong>
            Chúng tôi khuyến nghị sử dụng hook useAsyncList từ thư viện
            @react-stately/data để quản lý việc sắp xếp dữ liệu. Vì vậy, hãy đảm
            bảo bạn đã cài đặt thư viện này trước khi sử dụng tính năng sắp xếp.
          </strong>
        </p>
        <Table
          aria-label="Example table with client side sorting"
          classNames={{
            table: "min-h-[400px]",
          }}
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <TableHeader>
            <TableColumn key="name" allowsSorting>
              Name
            </TableColumn>
            <TableColumn key="height" allowsSorting>
              Height
            </TableColumn>
            <TableColumn key="mass" allowsSorting>
              Mass
            </TableColumn>
            <TableColumn key="birth_year" allowsSorting>
              Birth year
            </TableColumn>
          </TableHeader>
          <TableBody
            isLoading={isLoading}
            items={list.items}
            loadingContent={<Spinner label="Loading..." />}
          >
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Phân trang</h2>
        <p className="mb-4 text-gray-500 dark:text-gray-400"></p>
        
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader>
            <TableColumn key="name">NAME</TableColumn>
            <TableColumn key="role">ROLE</TableColumn>
            <TableColumn key="status">STATUS</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2 mt-8">
          Các props chính của Table
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border px-4 py-2 text-left">Prop</th>
                <th className="border px-4 py-2 text-left">Kiểu dữ liệu</th>
                <th className="border px-4 py-2 text-left">Mặc định</th>
                <th className="border px-4 py-2 text-left">Mô tả</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border px-4 py-2">children</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Các thành phần con TableHeader, TableBody, ...
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">hideHeader</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Ẩn phần header của bảng</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isStriped</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">
                  Bảng có nền xen kẽ các dòng
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">fullWidth</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">
                  Bảng chiếm toàn bộ chiều rộng
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">color</td>
                <td className="border px-4 py-2">
                  "default" | "primary" | ...
                </td>
                <td className="border px-4 py-2">"default"</td>
                <td className="border px-4 py-2">Màu sắc chủ đề bảng</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">radius</td>
                <td className="border px-4 py-2">
                  "none" | "sm" | "md" | "lg"
                </td>
                <td className="border px-4 py-2">"md"</td>
                <td className="border px-4 py-2">Bo góc bảng</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">shadow</td>
                <td className="border px-4 py-2">
                  "none" | "sm" | "md" | "lg"
                </td>
                <td className="border px-4 py-2">"md"</td>
                <td className="border px-4 py-2">Đổ bóng bảng</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">emptyContent</td>
                <td className="border px-4 py-2">string | ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Nội dung hiển thị khi không có dữ liệu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Lưu ý sử dụng</h2>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>
            Hãy luôn sử dụng <b>TableHeader</b> và <b>TableBody</b> làm con trực
            tiếp của <b>Table</b>.
          </li>
          <li>Các props của HeroUI Table đều được hỗ trợ qua Table.</li>
          <li>
            Bạn có thể kết hợp các props như <code>isStriped</code>,{" "}
            <code>fullWidth</code>, <code>color</code> để tuỳ biến giao diện
            bảng.
          </li>
          <li>
            Nên sử dụng <code>columns</code> và <code>items</code> để render
            bảng động.
          </li>
        </ul>
      </section>
    </div>
  );
}
