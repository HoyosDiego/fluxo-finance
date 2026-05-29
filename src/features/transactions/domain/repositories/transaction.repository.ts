import { Transaction } from '../entities/transaction.entity';

export interface TransactionRepository {
    save(transaction: Omit<Transaction, 'id' | 'createdAt'>): Promise<Transaction>;
}