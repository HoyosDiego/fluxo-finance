// src/presentation/components/ui/Button/Button.tsx
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { ButtonProps, variants } from './types';

export const Button = ({
    label,
    onPress,
    variant = 'primary',
    disabled = false,
    isLoading = false
}: ButtonProps) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            className={twMerge(
                'p-4 rounded-xl items-center justify-center flex-row',
                variants[variant],
                disabled && 'opacity-50'
            )}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === 'outline' ? '#2563eb' : '#ffffff'} />
            ) : (
                <Text className={twMerge(
                    'font-bold text-lg',
                    variant === 'outline' ? 'text-blue-600' : 'text-white'
                )}>
                    {label}
                </Text>
            )}
        </TouchableOpacity>
    );
};