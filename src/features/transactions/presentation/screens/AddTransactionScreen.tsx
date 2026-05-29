// features/transactions/presentation/screens/AddTransactionScreen.tsx
import { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CreateTransactionUseCase } from '../../domain/use-cases/create-transaction.use-case';
import { useCreateTransaction } from '../hooks/useCreateTransaction';

interface Props {
  createTransactionUseCase: CreateTransactionUseCase;
}

export default function AddTransactionScreen({ createTransactionUseCase }: Props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const { createTransaction, isLoading, error } = useCreateTransaction(createTransactionUseCase);

  const handleSubmit = () => {
    const parsedAmount = parseFloat(amount) || 0;

    createTransaction(description, parsedAmount, type, () => {
      setDescription('');
      setAmount('');
      alert('¡Transacción guardada con éxito!');
    });
  };

  return (
    <View className="flex-1 bg-slate-900 p-6 justify-start">
      <Text className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
        Tipo de movimiento
      </Text>

      {/* Selector de Tipo */}
      <View className="flex-row gap-4 mb-6">
        <TouchableOpacity
          onPress={() => { setType('expense'); }}
          className={`flex-1 p-4 rounded-xl items-center border ${type === 'expense' ? 'bg-red-500/10 border-red-500' : 'bg-slate-800 border-slate-700'}`}
        >
          <Text className={`font-bold ${type === 'expense' ? 'text-red-400' : 'text-slate-400'}`}>
            Gasto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { setType('income'); }}
          className={`flex-1 p-4 rounded-xl items-center border ${type === 'income' ? 'bg-emerald-500/10 border-emerald-500' : 'bg-slate-800 border-slate-700'}`}
        >
          <Text className={`font-bold ${type === 'income' ? 'text-emerald-400' : 'text-slate-400'}`}>
            Ingreso
          </Text>
        </TouchableOpacity>
      </View>

      {/* Inputs del formulario */}
      <Text className="text-slate-300 text-sm font-medium mb-2">Descripción</Text>
      <TextInput
        placeholder="Ej. Compra de insumos o herramientas"
        placeholderTextColor="#64748B"
        value={description}
        onChangeText={setDescription}
        className="bg-slate-800 text-slate-50 p-4 mb-4 rounded-xl border border-slate-700 focus:border-emerald-500"
      />

      <Text className="text-slate-300 text-sm font-medium mb-2">Monto ($)</Text>
      <TextInput
        placeholder="0.00"
        placeholderTextColor="#64748B"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
        className="bg-slate-800 text-slate-50 p-4 mb-6 rounded-xl border border-slate-700 focus:border-emerald-500"
      />

      {error && (
        <View className="bg-red-500/10 p-3 rounded-lg mb-4 border border-red-500/20">
          <Text className="text-red-400 text-sm font-medium text-center">{error}</Text>
        </View>
      )}

      {/* Botón de Acción */}
      {isLoading ? (
        <ActivityIndicator color="#10B981" size="large" className="mt-2" />
      ) : (
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.8}
          className="bg-emerald-500 p-4 rounded-xl items-center shadow-lg shadow-emerald-500/20 mt-2"
        >
          <Text className="text-slate-950 font-bold text-base">
            Confirmar Registro
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}