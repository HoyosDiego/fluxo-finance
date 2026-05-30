export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: ButtonVariant;
    disabled?: boolean;
    isLoading?: boolean;
}

export const variants = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-800',
    outline: 'border-2 border-blue-600 bg-transparent',
    ghost: 'bg-transparent',
};