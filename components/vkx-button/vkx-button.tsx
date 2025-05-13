import { Button } from "@heroui/button";

import { VkxButtonProps } from "./vkx-button-props";

const VkxButton: React.FC<VkxButtonProps> = ({
  children,
  color,
  isDisabled,
  isIconOnly,
  isLoading,
  startContent,
  onPress,
}) => {
  return (
    <Button
      color={color}
      isDisabled={isDisabled}
      isIconOnly={isIconOnly}
      isLoading={isLoading}
      startContent={startContent}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default VkxButton;
