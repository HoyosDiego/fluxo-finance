import { Transaction } from '../entities/transaction.entity';
import { TransactionRepository } from '../repositories/transaction.repository';

export class CreateTransactionUseCase {
    constructor(private repository: TransactionRepository) { }

    async execute(description: string, amount: number, type: 'income' | 'expense'): Promise<Transaction> {
        if (amount <= 0) {
            throw new Error('El monto debe ser un número positivo mayor a cero.');
        }

        if (!description.trim()) {
            throw new Error('La descripción no puede estar vacía.');
        }

        return await this.repository.save({ description, amount, type });
    }
}