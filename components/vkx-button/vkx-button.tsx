import { Button } from "@heroui/button";

import { VkxButtonProps } from "./vkx-button-props";

const VkxButton: React.FC<VkxButtonProps> = ({
  children,
  className,
  color,
  isDisabled,
  isIconOnly,
  isLoading,
  onPress,
  startContent,
  type,
  variant,
  ...props
}) => {
  return (
    <Button
      className={className}
      color={color}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      isLoading={isLoading}
      startContent={startContent}
      type={type}
      variant={variant}
      onPress={onPress}
      {...props}
    >
      {children}
    </Button>
  );
};

export default VkxButton;
