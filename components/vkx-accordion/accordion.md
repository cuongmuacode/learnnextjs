# VkxAccordion Component

VkxAccordion là một component UI có thể mở rộng/thu gọn cho phép người dùng hiển thị và ẩn các phần nội dung. Được xây dựng dựa trên component Accordion của HeroUI, nó cung cấp cách đơn giản để tổ chức và hiển thị nội dung theo định dạng có thể mở rộng/thu gọn.

## Cài đặt

```bash
npm install @heroui/react
```

## Cách sử dụng cơ bản

```tsx
import { VkxAccordion } from "@/components/vkx-accordion/vkx-accordion";

const accordionItems = [
  {
    key: "1", 
    title: "Phần 1",
    children: "Nội dung cho phần 1"
  },
  {
    key: "2",
    title: "Phần 2", 
    subtitle: "Phụ đề tùy chọn",
    children: "Nội dung cho phần 2"
  }
];

export default function MyComponent() {
  return (
    <VkxAccordion 
      accordionItems={accordionItems}
      selectionMode="single"
      variant="bordered"
    />
  );
}
```

## Props

### VkxAccordion Props

| Prop | Kiểu dữ liệu | Mô tả | Giá trị mặc định |
|------|--------------|--------|------------------|
| `accordionItems` | `VkxAccordionItemProps[]` | Mảng các mục accordion cần hiển thị | Bắt buộc |
| `selectionMode` | `'none' \| 'single' \| 'multiple'` | Điều khiển số lượng mục có thể mở rộng cùng lúc | `'multiple'` |  
| `disabledKeys` | `Set<string>` | Tập hợp các key của mục bị vô hiệu hóa | - |
| `defaultExpandedKeys` | `Set<string>` | Tập hợp các key của mục mở rộng mặc định | - |
| `selectedKeys` | `Set<string>` | Điều khiển các mục đang được mở rộng | - |
| `onSelectionChange` | `(keys: Set<string>) => void` | Callback được gọi khi các mục mở rộng thay đổi | - |
| `isCompact` | `boolean` | Giảm padding và khoảng cách giữa các mục | `false` |
| `variant` | `'light' \| 'bordered' \| 'shadow' \| 'splitted'` | Kiểu hiển thị | `'light'` |

### VkxAccordionItem Props

| Prop | Kiểu dữ liệu | Mô tả |
|------|--------------|--------|
| `key` | `string` | Định danh duy nhất cho mục |
| `title` | `ReactNode` | Nội dung tiêu đề |
| `subtitle` | `ReactNode` | Nội dung phụ đề (tùy chọn) |
| `children` | `ReactNode` | Nội dung hiển thị khi mở rộng |
| `ariaLabel` | `string` | Nhãn truy cập |
| `startContent` | `ReactNode` | Nội dung hiển thị trước tiêu đề |
| `indicator` | `ReactNode` | Tùy chỉnh chỉ báo mở rộng/thu gọn |

## Ví dụ

### Chế độ chọn một mục

```tsx
<VkxAccordion
  accordionItems={items}
  selectionMode="single"
  variant="bordered"
/>
```

### Chọn nhiều mục với các mục mở rộng mặc định

```tsx
<VkxAccordion
  accordionItems={items}
  selectionMode="multiple"
  defaultExpandedKeys={new Set(["1", "2"])}
  variant="shadow"
/>
```

### Với các mục bị vô hiệu hóa

```tsx
<VkxAccordion
  accordionItems={items}
  disabledKeys={new Set(["2"])}
  variant="splitted"
/>
```

### Xử lý thay đổi lựa chọn

```tsx
<VkxAccordion
  accordionItems={items}
  onSelectionChange={(keys) => {
    console.log("Các mục đang mở rộng:", Array.from(keys));
  }}
/>
```
