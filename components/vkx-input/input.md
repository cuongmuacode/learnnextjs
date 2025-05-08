# VkxInput Component

VkxInput là một wrapper component cho Input của HeroUI, cung cấp một giao diện đơn giản và dễ sử dụng cho các trường nhập liệu.

## Cài đặt

```bash
npm install @heroui/input
```

## Cách sử dụng cơ bản

```tsx
import { VkxInput } from "@/components/vkx-input/vkx-input";

export default function MyComponent() {
  return (
    <VkxInput
      label="Tên người dùng"
      placeholder="Nhập tên của bạn"
      type="text"
    />
  );
}
```

## Props

| Prop | Kiểu dữ liệu | Mô tả | Giá trị mặc định |
|------|--------------|--------|------------------|
| `type` | `'text' \| 'search' \| 'url' \| 'tel' \| 'email' \| 'password'` | Kiểu của input | `'text'` |
| `placeholder` | `string` | Văn bản gợi ý | - |
| `label` | `ReactNode` | Nhãn của input | - |
| `defaultValue` | `string` | Giá trị mặc định | - |
| `readOnly` | `boolean` | Chế độ chỉ đọc | `false` |
| `isDisabled` | `boolean` | Vô hiệu hóa input | `false` |
| `labelPlacement` | `"outside" \| "outside-left" \| "inside"` | Vị trí của label | - |
| `description` | `string` | Mô tả bổ sung | - |
| `errorMessage` | `string` | Thông báo lỗi | - |
| `isInvalid` | `boolean` | Trạng thái không hợp lệ | `false` |
| `value` | `string` | Giá trị của input | - |
| `onValueChange` | `(value: string) => void` | Xử lý khi giá trị thay đổi | - |
| `onClear` | `() => void` | Xử lý khi xóa giá trị | - |
| `endContent` | `ReactNode` | Nội dung ở cuối input | - |

## Ví dụ

### Input cơ bản

```tsx
<VkxInput
  label="Email"
  placeholder="Nhập email của bạn"
  type="email"
/>
```

### Input với validation

```tsx
<VkxInput
  label="Email"
  type="email"
  isInvalid={true}
  errorMessage="Email không hợp lệ"
/>
```

### Input với mô tả

```tsx
<VkxInput
  label="Mật khẩu"
  type="password"
  description="Mật khẩu phải chứa ít nhất 8 ký tự"
/>
```

### Input với nội dung tùy chỉnh ở cuối

```tsx
<VkxInput
  label="Tìm kiếm"
  type="search"
  endContent={<SearchIcon className="text-gray-400" />}
  onClear={() => console.log('Đã xóa')}
/>
```

### Input với vị trí label khác nhau

```tsx
<div className="space-y-4">
  <VkxInput
    label="Label bên ngoài"
    labelPlacement="outside"
  />
  <VkxInput
    label="Label bên trong"
    labelPlacement="inside"
  />
  <VkxInput
    label="Label bên trái"
    labelPlacement="outside-left"
  />
</div>
```

### Input với controlled value

```tsx
const [value, setValue] = useState("");

<VkxInput
  label="Input có kiểm soát"
  value={value}
  onValueChange={setValue}
/>
```

## Lưu ý

1. Component kế thừa tất cả tính năng từ HeroUI Input
2. Có thể sử dụng các ReactNode cho label và endContent
3. Hỗ trợ đầy đủ việc xử lý lỗi thông qua isInvalid và errorMessage
4. Có thể tùy chỉnh vị trí của label thông qua labelPlacement
5. Hỗ trợ cả uncontrolled (với defaultValue) và controlled (với value và onValueChange)
