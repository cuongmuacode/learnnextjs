import { Button } from '@heroui/button';
import React from 'react';
import { VkxButtonProps } from './vkx-button-props';

const VkxButton: React.FC<VkxButtonProps> = ({
    children,
    color,
    isDisabled,
    isLoading,
    startContent,
    isIconOnly,
    onPress
    }) => {
    return (
        <Button
            children={children}
            color={color}
            isDisabled={isDisabled}
            isLoading={isLoading}
            startContent={startContent}
            isIconOnly={isIconOnly }
            onPress={onPress}
        ></Button>
    );
};

export default VkxButton;