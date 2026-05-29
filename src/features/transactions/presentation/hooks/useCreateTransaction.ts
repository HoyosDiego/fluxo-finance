import { useState } from 'react';
import { CreateTransactionUseCase } from '../../domain/use-cases/create-transaction.use-case';

export function useCreateTransaction(useCase: CreateTransactionUseCase) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createTransaction = async (
        description: string,
        amount: number,
        type: 'income' | 'expense',
        onSuccess: () => void
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            await useCase.execute(description, amount, type);
            onSuccess();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || 'Ocurrió un error inesperado.');
            } else {
                setError('Ocurrió un error inesperado.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        createTransaction,
        isLoading,
        error,
    };
}