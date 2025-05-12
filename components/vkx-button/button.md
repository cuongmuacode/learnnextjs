# VkxButton Component

VkxButton là một wrapper component cho Button của HeroUI, cung cấp một giao diện đơn giản và dễ tùy chỉnh cho các nút bấm trong ứng dụng.

## Cài đặt

```bash
npm install @heroui/button
```

## Cách sử dụng cơ bản

```tsx
import VkxButton from "@/components/vkx-button/vkx-button";

export default function MyComponent() {
  return (
    <VkxButton color="primary">
      Click me
    </VkxButton>
  );
}
```

## Props

| Prop | Kiểu dữ liệu | Mô tả | Giá trị mặc định |
|------|--------------|--------|------------------|
| `children` | `ReactNode` | Nội dung của nút | Bắt buộc |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | Màu sắc của nút | `"default"` |
| `isDisabled` | `boolean` | Vô hiệu hóa nút | `false` |
| `isLoading` | `boolean` | Hiển thị trạng thái đang tải | `false` |
| `startContent` | `ReactNode` | Nội dung hiển thị trước children | - |
| `isIconOnly` | `boolean` | Nút chỉ hiển thị icon | `false` |
| `onPress` | `(e: PressEvent) => void` | Hàm xử lý khi nút được nhấn | - |

## Ví dụ

### Nút với các màu sắc khác nhau

```tsx
<div className="flex gap-2">
  <VkxButton color="primary">Primary</VkxButton>
  <VkxButton color="secondary">Secondary</VkxButton>
  <VkxButton color="success">Success</VkxButton>
  <VkxButton color="warning">Warning</VkxButton>
  <VkxButton color="danger">Danger</VkxButton>
</div>
```

### Nút với icon

```tsx
import { SearchIcon } from "@heroicons/react/24/outline";

<VkxButton startContent={<SearchIcon className="h-5 w-5" />}>
  Tìm kiếm
</VkxButton>
```

### Nút chỉ hiển thị icon

```tsx
<VkxButton
  isIconOnly
  startContent={<SearchIcon className="h-5 w-5" />}
  aria-label="Tìm kiếm"
/>
```

### Nút loading

```tsx
<VkxButton
  isLoading={true}
  color="primary"
>
  Đang xử lý...
</VkxButton>
```

### Nút với xử lý sự kiện

```tsx
<VkxButton
  color="primary"
  onPress={(e) => {
    console.log('Nút đã được nhấn', e);
  }}
>
  Click me
</VkxButton>
```

### Nút bị vô hiệu hóa

```tsx
<VkxButton isDisabled>
  Không thể nhấn
</VkxButton>
```

## Lưu ý

1. Component kế thừa tất cả tính năng từ HeroUI Button
2. Props `children` và `startContent` chấp nhận ReactNode, cho phép bạn truyền vào các component tùy chỉnh
3. Khi sử dụng `isIconOnly`, nên cung cấp `aria-label` cho accessibility
4. Trạng thái `isLoading` tự động vô hiệu hóa nút và hiển thị spinner
5. Có thể sử dụng cùng với các component khác của HeroUI để tạo giao diện phức tạp hơn
6. Component tự động xử lý các trạng thái hover, focus và active
